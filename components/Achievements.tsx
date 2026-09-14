import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

// This section is data-driven and intentionally starts empty since no
// achievements/activities were provided. Add entries to the `items` array
// below as they come up — the section will render automatically once
// items.length > 0, and stays hidden otherwise.
const items: { title: string; description: string; date?: string }[] = [];

export function Achievements() {
  if (items.length === 0) return null;

  return (
    <section id="achievements" className="section section-rule">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Achievements & additional activities"
        />
      </Reveal>
      <div className="space-y-6">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 dark:border-paper/10 pb-4">
              <div>
                <h3 className="font-serif text-[17px] text-ink dark:text-paper">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-ink/65 dark:text-paper/65 mt-1">
                  {item.description}
                </p>
              </div>
              {item.date && (
                <span className="font-mono text-[13.5px] text-ink/60 dark:text-paper/60 shrink-0">
                  {item.date}
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
