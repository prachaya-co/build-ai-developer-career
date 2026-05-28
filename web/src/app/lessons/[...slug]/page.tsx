import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getLessonBySlug, getLessonSlugs } from "@/lib/lessons";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getLessonSlugs();
  return slugs.map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug.join("/"));

  if (!lesson) {
    return {};
  }

  return {
    title: `${lesson.title} | AI Agent Developer Roadmap`,
    description: lesson.summary,
  };
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug.join("/"));

  if (!lesson) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-5 py-10 md:px-10">
      <header className="rounded-3xl border border-black/10 bg-surface p-7 shadow-[0_12px_28px_rgba(56,33,19,0.08)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
          {lesson.level}
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          {lesson.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted md:text-lg">
          {lesson.summary}
        </p>
      </header>

      <article className="rounded-3xl border border-black/10 bg-white/72 px-6 py-8 shadow-[0_12px_28px_rgba(56,33,19,0.08)] md:px-10 md:py-12">
        {lesson.content}
      </article>
    </main>
  );
}
