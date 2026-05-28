import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";
import { cache } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx-components";

const lessonsRoot = path.join(process.cwd(), "src/content/lessons");

export type LessonLevel = "basic" | "intermediate" | "advanced";

export type LessonFrontmatter = {
  title: string;
  summary: string;
  level: LessonLevel;
};

export type LessonSummary = LessonFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export type LessonDetail = LessonSummary & {
  content: React.ReactElement;
  sourcePath: string;
};

async function walkLessonFiles(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const results = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return walkLessonFiles(absolutePath);
      }
      if (entry.isFile() && absolutePath.endsWith(".mdx")) {
        return [absolutePath];
      }
      return [];
    }),
  );

  return results.flat();
}

function toSlug(filePath: string) {
  return path.relative(lessonsRoot, filePath).replace(/\\/g, "/").replace(/\.mdx$/, "");
}

async function readLessonFile(filePath: string) {
  const source = await fs.readFile(filePath, "utf8");
  const parsed = matter(source);
  const reading = readingTime(parsed.content);

  return {
    source,
    parsed,
    readingMinutes: Math.max(1, Math.round(reading.minutes)),
  };
}

export const getLessonSlugs = cache(async () => {
  const files = await walkLessonFiles(lessonsRoot);
  return files.map(toSlug).sort();
});

export const getLessonSummaries = cache(async (): Promise<LessonSummary[]> => {
  const files = await walkLessonFiles(lessonsRoot);
  const lessons = await Promise.all(
    files.map(async (filePath) => {
      const { parsed, readingMinutes } = await readLessonFile(filePath);
      return {
        slug: toSlug(filePath),
        title: parsed.data.title as string,
        summary: parsed.data.summary as string,
        level: parsed.data.level as LessonLevel,
        readingMinutes,
      } satisfies LessonSummary;
    }),
  );

  return lessons.sort((left, right) => left.slug.localeCompare(right.slug));
});

export const getLessonBySlug = cache(async (slug: string): Promise<LessonDetail | null> => {
  const filePath = path.join(lessonsRoot, `${slug}.mdx`);

  try {
    await fs.access(filePath);
  } catch {
    return null;
  }

  const { source, parsed, readingMinutes } = await readLessonFile(filePath);
  const { content } = await compileMDX<LessonFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      },
    },
    components: mdxComponents,
  });

  return {
    slug,
    title: parsed.data.title as string,
    summary: parsed.data.summary as string,
    level: parsed.data.level as LessonLevel,
    readingMinutes,
    content,
    sourcePath: filePath,
  };
});
