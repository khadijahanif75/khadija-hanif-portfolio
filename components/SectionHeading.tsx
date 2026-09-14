interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-prose">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-tight tracking-tight text-ink dark:text-paper">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] leading-relaxed text-ink/70 dark:text-paper/70">
          {description}
        </p>
      )}
    </div>
  );
}
