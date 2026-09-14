import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section section-rule">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies"
          description="Grouped by how I actually use them, not scored — a bar chart can't tell you how well someone knows a tool."
        />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <h3 className="font-serif text-[17px] mb-3 text-ink dark:text-paper">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
