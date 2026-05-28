export default function AssistantPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-5 py-10 md:px-10">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
          AI Q&A Assistant
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          ถามคำถามจากเนื้อหาในเว็บ
        </h1>
        <p className="mt-4 text-base leading-8 text-muted md:text-lg">
          หน้านี้จะเชื่อม RAG ในเฟสถัดไป เพื่อให้ตอบจาก roadmap และบทเรียนเท่านั้น
        </p>
      </header>

      <section className="rounded-3xl border border-dashed border-black/15 bg-white/65 p-6">
        <p className="text-sm text-muted">
          Scaffold พร้อมแล้ว รอเชื่อม backend AI search, citations และการจำกัดขอบเขตคำตอบ
        </p>
      </section>
    </main>
  );
}
