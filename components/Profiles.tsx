import { Github, Linkedin, Code2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const profiles = [
  { label: "GitHub", href: siteConfig.links.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  { label: "LeetCode", href: siteConfig.links.leetcode, icon: Code2 },
];

export function Profiles() {
  return (
    <section id="profiles" className="section section-rule">
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          {profiles.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
