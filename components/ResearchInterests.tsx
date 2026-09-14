import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { researchInterests } from "@/data/skills";

export function ResearchInterests() {
  return (
    <section id="research" className="section section-rule">
      <Reveal>
        <SectionHeading
          eyebrow="Research Interests"
          title="What I want to spend my career on"
        />
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {researchInterests.map((interest, i) => (
          <Reveal key={interest.title} delay={(i % 2) * 0.06}>
            <div className="border-l-2 border-ink/10 dark:border-paper/10 pl-5 transition-colors duration-300 hover:border-signal dark:hover:border-signal-light">
              <h3 className="font-serif text-[17px] text-ink dark:text-paper mb-1.5">
                {interest.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink/65 dark:text-paper/65">
                {interest.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
