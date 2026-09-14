import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section section-rule">
      <Reveal>
        <SectionHeading eyebrow="About" title="A student building toward reliable AI" />
      </Reveal>
      <Reveal delay={0.08}>
        <div className="max-w-prose space-y-5 text-[16px] leading-relaxed text-ink/80 dark:text-paper/80">
          <p>
            I&apos;m a BS Data Science undergraduate at the University of
            Engineering and Technology (UET), Lahore, developing skills across
            data analysis, machine learning, AI-based applications, and
            software development.
          </p>
          <p>
            I&apos;m particularly interested in reliable and trustworthy AI,
            intelligent systems, explainable machine learning, NLP, and
            LLM-based systems — the kind of work where understanding{" "}
            <em className="not-italic text-signal dark:text-signal-light">why</em>{" "}
            a system behaves the way it does matters as much as its accuracy.
          </p>
          <p>
            My work so far spans an internship building services for an
            AI-powered job matching platform, an independent research project
            tracing the reliability of LLM agents, and academic projects in
            medical decision support and predictive modeling.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
