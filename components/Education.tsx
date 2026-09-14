import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section id="education" className="section section-rule">
      <Reveal>
        <SectionHeading eyebrow="Education" title="Academic background" />
      </Reveal>
      <Reveal delay={0.08}>
        <div className="max-w-prose border border-ink/10 dark:border-paper/10 rounded-lg p-6 sm:p-8 transition-colors duration-300 hover:border-signal/30 dark:hover:border-signal-light/30">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-serif text-xl text-ink dark:text-paper">
              BS Data Science
            </h3>
            <span className="font-mono text-[13.5px] text-ink/50 dark:text-paper/50">
              2024 – Present
            </span>
          </div>
          <p className="mt-1 text-[15px] text-ink/70 dark:text-paper/70">
            University of Engineering and Technology (UET), Lahore
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="chip">GPA 3.56 / 4.00</span>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60 dark:text-paper/60">
            Relevant coursework: Artificial Intelligence, Programming
            Fundamentals, Object-Oriented Programming, Data Structures &amp;
            Algorithms, Database Systems.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
