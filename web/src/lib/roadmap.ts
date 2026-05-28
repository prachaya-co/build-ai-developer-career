export type RoadmapLevel = {
  slug: string;
  title: string;
  summary: string;
  audience: string;
};

export const roadmapLevels: RoadmapLevel[] = [
  {
    slug: "basic",
    title: "Basic",
    summary: "พื้นฐาน LLM, prompt design และ context management",
    audience: "ทุกคนในทีม",
  },
  {
    slug: "intermediate",
    title: "Intermediate",
    summary: "RAG, tool use, workflow automation และ mini project",
    audience: "คนที่เริ่มนำ AI ไปใช้กับงานจริง",
  },
  {
    slug: "advanced",
    title: "Advanced",
    summary: "multi-agent, eval, guardrails และ observability",
    audience: "ทีมที่ทำ production AI workflows",
  },
];
