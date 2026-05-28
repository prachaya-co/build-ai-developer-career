import Link from "next/link";
import { ArrowRight, BookOpenText, ShieldCheck, Workflow } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-5 py-8 md:px-10 md:py-14">
      <main className="grid gap-6 md:grid-cols-[1.35fr_1fr]">
        <section className="animate-reveal rounded-3xl border border-black/10 bg-surface p-7 shadow-[0_18px_45px_rgba(92,49,32,0.14)] md:p-10">
          <p className="mb-3 inline-flex rounded-full border border-brand/25 bg-brand-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
            Public Learning Platform
          </p>
          <h1 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Roadmap การพัฒนา
            <br />
            ด้วย AI Agent
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted md:text-lg">
            แพลตฟอร์มภาษาไทยสำหรับเรียนรู้ตั้งแต่พื้นฐานจนถึงระดับ production:
            prompt design, workflow orchestration, multi-agent, eval และ guardrails
            แบบนำไปใช้จริงในทีมได้ทันที
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:translate-y-[-1px] hover:shadow-lg"
            >
              เริ่มตาม Roadmap
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/lessons"
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-ink px-5 py-2.5 text-sm font-semibold text-brand transition hover:translate-y-[-1px]"
            >
              ดูบทเรียนทั้งหมด
            </Link>
            <Link
              href="/assistant"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-white/55 px-5 py-2.5 text-sm font-semibold transition hover:bg-white"
            >
              ทดลอง AI Q&A
            </Link>
          </div>
        </section>

        <section className="animate-reveal rounded-3xl border border-black/10 bg-gradient-to-b from-[#143a4d] to-[#1f5660] p-7 text-[#ebf4f7] shadow-[0_18px_45px_rgba(16,63,86,0.22)] md:p-8">
          <p className="text-xs uppercase tracking-[0.12em] text-[#9ed5de]">แกนหลักของแพลตฟอร์ม</p>
          <ul className="mt-5 space-y-4 text-sm leading-7 md:text-base">
            <li className="flex items-start gap-3">
              <BookOpenText className="mt-1 size-5 shrink-0" />
              เนื้อหาเรียงระดับ Basic → Intermediate → Advanced
            </li>
            <li className="flex items-start gap-3">
              <Workflow className="mt-1 size-5 shrink-0" />
              Assignment + Progress Tracking สำหรับผู้สมัครสมาชิก
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-1 size-5 shrink-0" />
              บท Advanced ครอบคลุม Eval และ Guardrails ระดับ Production
            </li>
          </ul>
        </section>
      </main>

      <section className="animate-reveal grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Basic",
            detail: "พื้นฐาน LLM, prompt, context และ workflow ที่ใช้ได้ทันที",
            href: "/lessons/basic/01-intro-to-ai-agents",
          },
          {
            title: "Intermediate",
            detail: "RAG เบื้องต้น, tool-use orchestration, quiz และ mini project",
            href: "/lessons/intermediate/01-rag-grounded-qna",
          },
          {
            title: "Advanced",
            detail: "multi-agent, eval harness, guardrails และ observability",
            href: "/lessons",
          },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-[0_10px_25px_rgba(44,24,17,0.08)] transition hover:translate-y-[-2px] hover:shadow-[0_14px_28px_rgba(44,24,17,0.12)]"
          >
            <h2 className="text-lg font-extrabold">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-muted">{item.detail}</p>
            <p className="mt-4 text-sm font-semibold text-brand">คลิกเพื่ออ่านบทเรียน</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
