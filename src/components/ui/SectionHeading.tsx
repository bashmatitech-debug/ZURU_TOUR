type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <h2 className="text-2xl sm:text-3xl font-display font-medium text-forest">{title}</h2>
      {description ? (
        <p className="max-w-xl text-ink/70 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
