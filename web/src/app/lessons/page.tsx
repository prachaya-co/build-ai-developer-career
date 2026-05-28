import Link from "next/link";

import { getLessonSummaries } from "@/lib/lessons";

const levelLabels: Record<string, string> = {
  basic: "Basic",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export default async function LessonsIndexPage() {
  const lessons = await getLessonSummaries();

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-5 py-10 md:px-10">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
          Lessons
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          บทเรียนภาษาไทยจาก MDX
        </h1>
        <p className="mt-4 text-base leading-8 text-muted md:text-lg">
          รายการนี้ดึงจากไฟล์ `.mdx` ใน repo โดยตรง เพื่อให้ทีมแก้เนื้อหาผ่าน Git flow
          ได้ทันที
        </p>
      </header>

      <section className="grid gap-4">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/lessons/${lesson.slug}`}
            className="block rounded-3xl border border-black/10 bg-surface p-6 shadow-[0_12px_28px_rgba(56,33,19,0.08)] transition hover:translate-y-[-2px] hover:shadow-[0_16px_34px_rgba(56,33,19,0.12)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-accent">
                  {levelLabels[lesson.level]}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold">{lesson.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                  {lesson.summary}
                </p>
              </div>
              <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-foreground">
                {lesson.readingMinutes} นาที
              </div>
            </div>
            <div className="mt-5 text-sm font-semibold text-brand underline decoration-brand/30 underline-offset-4">
              อ่านบทเรียน
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
