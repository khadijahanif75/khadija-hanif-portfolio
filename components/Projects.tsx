import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { publicFileExists } from "@/lib/files";

export function Projects() {
  return (
    <section id="projects" className="section section-rule">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Independent and academic work"
          description="Add a new project by editing data/projects.ts — no component changes needed."
        />
      </Reveal>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            imageExists={publicFileExists(project.image)}
          />
        ))}
      </div>
    </section>
  );
}
