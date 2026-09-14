import { Github, Linkedin, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 dark:border-paper/10">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-10 flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-serif text-[16px] text-ink dark:text-paper">
            Khadija Hanif
          </p>
          <p className="text-[13.5px] text-ink/55 dark:text-paper/55 mt-0.5">
            BS Data Science · UET Lahore
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink/50 dark:text-paper/50 hover:text-signal dark:hover:text-signal-light transition-colors">
            <Github size={18} />
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink/50 dark:text-paper/50 hover:text-signal dark:hover:text-signal-light transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={siteConfig.links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-ink/50 dark:text-paper/50 hover:text-signal dark:hover:text-signal-light transition-colors">
            <Code2 size={18} />
          </a>
        </div>

        <p className="text-[13.5px] text-ink/60 dark:text-paper/60 font-mono">
          © {year} Khadija Hanif
        </p>
      </div>
    </footer>
  );
}
