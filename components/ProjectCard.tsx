"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, ImageOff } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  imageExists: boolean;
}

export function ProjectCard({ project, index, imageExists }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.08 }}
      whileHover={{ y: -4 }}
      className="group border border-ink/10 dark:border-paper/10 rounded-lg overflow-hidden bg-paper dark:bg-ink-soft/40 transition-[border-color,box-shadow] duration-300 ease-editorial hover:border-signal/40 dark:hover:border-signal-light/40 hover:shadow-[0_20px_45px_-25px_rgba(16,20,28,0.35)] dark:hover:shadow-[0_20px_45px_-25px_rgba(0,0,0,0.5)]"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-ink-soft">
        {imageExists ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
          />
        ) : (
          <div
            role="img"
            aria-label={`${project.title} preview image not yet added`}
            className="h-full w-full flex flex-col items-center justify-center gap-2 text-paper/60"
          >
            <ImageOff size={32} strokeWidth={1.25} />
            <span className="font-mono text-[12.5px]">Preview coming soon</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="eyebrow">{project.category}</span>
          <span className="font-mono text-[13px] text-ink/60 dark:text-paper/60">
            {project.period}
          </span>
        </div>

        <h3 className="font-serif text-xl text-ink dark:text-paper mb-2.5">
          {project.title}
        </h3>

        <p className="text-[14.5px] leading-relaxed text-ink/70 dark:text-paper/70 mb-4">
          {project.description}
        </p>

        {project.metrics && (
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 border-y border-ink/10 dark:border-paper/10 py-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dt className="text-[13px] text-ink/50 dark:text-paper/50">{m.label}</dt>
                <dd className="metric text-[15px] text-signal dark:text-signal-light">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="text-[14px] text-ink/65 dark:text-paper/65 space-y-1.5 mb-4">
          {project.features.slice(0, 4).map((feature, i) => (
            <li key={i} className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink/25 dark:before:text-paper/25">
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="flex flex-wrap gap-3 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-ink/15 dark:border-paper/15 px-3.5 py-2 text-[13.5px] font-medium text-ink/75 dark:text-paper/75 transition-all duration-200 hover:border-signal hover:text-signal dark:hover:border-signal-light dark:hover:text-signal-light hover:-translate-y-0.5"
              >
                <Github size={15} /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-ink/15 dark:border-paper/15 px-3.5 py-2 text-[13.5px] font-medium text-ink/75 dark:text-paper/75 transition-all duration-200 hover:border-signal hover:text-signal dark:hover:border-signal-light dark:hover:text-signal-light hover:-translate-y-0.5"
              >
                <ExternalLink size={15} /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
