import type { ComponentPropsWithoutRef } from "react";

function headingClassName(size: string) {
  return `scroll-m-20 font-black tracking-tight text-foreground ${size}`;
}

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className={headingClassName("mt-10 text-4xl") } {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className={headingClassName("mt-10 text-3xl") } {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className={headingClassName("mt-8 text-2xl") } {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-5 leading-8 text-[#3e3631]" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 leading-8 text-[#3e3631]" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 leading-8 text-[#3e3631]" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="font-semibold text-brand underline decoration-brand/40 underline-offset-4"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-6 border-l-4 border-brand/40 bg-white/75 px-5 py-4 text-[#4c4037]"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl bg-[#161413] p-5 text-sm text-[#f7efe7]"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-[0.92em] text-brand" {...props} />
  ),
};
