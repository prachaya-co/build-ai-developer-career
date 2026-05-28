export type LessonContent = {
  title: string;
  summary: string;
  level: "basic" | "intermediate" | "advanced";
};

export const lessonContentDirectory = "src/content/lessons";
