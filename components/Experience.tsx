import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { experience, completionLetter } from "@/data/experience";
import { siteConfig } from "@/config/site";
import { publicFileExists } from "@/lib/files";

export function Experience() {
  const hasCompletionLetter =
    completionLetter.available && publicFileExists(siteConfig.completionLetterPath);

  return (
    <section id="experience" className="section section-rule">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Industrial experience" />
      </Reveal>

      <div className="space-y-10">
        {experience.map((entry, i) => (
          <Reveal key={entry.id} delay={i * 0.08}>
            <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">
              <div>
                <h3 className="font-serif text-lg text-ink dark:text-paper">
                  {entry.role}
                </h3>
                <p className="text-[15px] text-ink/70 dark:text-paper/70 mt-1">
                  {entry.organization}
                </p>
                <p className="font-mono text-[13.5px] text-ink/60 dark:text-paper/60 mt-2">
                  {entry.duration} · {entry.location}
                </p>
                <span className="chip mt-3 inline-flex">{entry.type}</span>
              </div>

              <div>
                <p className="text-[15px] leading-relaxed text-ink/80 dark:text-paper/80 mb-4">
                  {entry.description}
                </p>
                <ul className="space-y-2.5 text-[15px] leading-relaxed text-ink/75 dark:text-paper/75">
                  {entry.responsibilities.map((point, i) => (
                    <li key={i} className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink/30 dark:before:text-paper/30">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {hasCompletionLetter && (
        <Reveal delay={0.1}>
          <div className="mt-12 pt-8 border-t border-ink/10 dark:border-paper/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[15px] font-medium text-ink dark:text-paper">
                {completionLetter.label}
              </p>
              <p className="text-[14px] text-ink/60 dark:text-paper/60 mt-0.5">
                Verified proof of internship completion.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={siteConfig.completionLetterPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View letter <ExternalLink size={14} />
              </a>
              <a href={siteConfig.completionLetterPath} download className="btn-secondary">
                Download
              </a>
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}
