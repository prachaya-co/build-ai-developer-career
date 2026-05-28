import Link from "next/link";

export default function RoadmapPage() {
  const levels = [
    {
      title: "Basic",
      description:
        "พื้นฐานของ LLM, prompt design, context management และการใช้ AI agent ในงานประจำ",
    },
    {
      title: "Intermediate",
      description:
        "RAG, tool use, workflow automation, quiz และ mini project เพื่อวัดการใช้งานจริง",
    },
    {
      title: "Advanced",
      description:
        "multi-agent orchestration, eval harness, guardrails และ observability ระดับ production",
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-5 py-10 md:px-10">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
          Learning Roadmap
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          Roadmap พัฒนา software ด้วย AI Agent
        </h1>
        <p className="mt-4 text-base leading-8 text-muted md:text-lg">
          เส้นทางเรียนแบบระดับชัดเจนสำหรับทีมที่ต้องการใช้ AI อย่างมีระบบ ตั้งแต่
          พื้นฐานไปจนถึง production-grade workflow
        </p>
        <div className="mt-6">
          <Link
            href="/lessons"
            className="inline-flex items-center rounded-full border border-brand/30 bg-brand-ink px-5 py-2.5 text-sm font-semibold text-brand transition hover:translate-y-[-1px]"
          >
            ไปหน้าบทเรียนทั้งหมด
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {levels.map((level, index) => (
          <article
            key={level.title}
            className="rounded-2xl border border-black/10 bg-surface p-6 shadow-[0_12px_28px_rgba(56,33,19,0.08)]"
          >
            <p className="text-sm font-semibold text-accent">0{index + 1}</p>
            <h2 className="mt-2 text-xl font-extrabold">{level.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{level.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
