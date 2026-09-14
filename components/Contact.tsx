"use client";

import { useState } from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

// This form is optional and has no backend wired up — see the note below
// the form for how to connect one (Formspree, an API route, etc.).
export function Contact() {
  const [status, setStatus] = useState<"idle" | "note">("idle");

  return (
    <section id="contact" className="section section-rule">
      <Reveal>
        <SectionHeading eyebrow="Contact" title="Get in touch" />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-14">
        <Reveal delay={0.06}>
          <div className="space-y-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-[15px] text-ink/80 dark:text-paper/80 transition-colors hover:text-signal dark:hover:text-signal-light"
            >
              <Mail size={18} /> {siteConfig.email}
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[15px] text-ink/80 dark:text-paper/80 transition-colors hover:text-signal dark:hover:text-signal-light"
            >
              <Github size={18} /> github.com/kadijahanif75
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[15px] text-ink/80 dark:text-paper/80 transition-colors hover:text-signal dark:hover:text-signal-light"
            >
              <Linkedin size={18} /> linkedin.com/in/khadijahanif75
            </a>
            <div className="flex items-center gap-3 text-[15px] text-ink/80 dark:text-paper/80">
              <MapPin size={18} /> {siteConfig.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("note");
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-[13.5px] text-ink/60 dark:text-paper/60 mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-sm border border-ink/50 dark:border-paper/40 bg-transparent px-3.5 py-2.5 text-[15px] outline-none transition-colors focus:border-signal dark:focus:border-signal-light"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[13.5px] text-ink/60 dark:text-paper/60 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-sm border border-ink/50 dark:border-paper/40 bg-transparent px-3.5 py-2.5 text-[15px] outline-none transition-colors focus:border-signal dark:focus:border-signal-light"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[13.5px] text-ink/60 dark:text-paper/60 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-sm border border-ink/50 dark:border-paper/40 bg-transparent px-3.5 py-2.5 text-[15px] outline-none transition-colors focus:border-signal dark:focus:border-signal-light resize-none"
              />
            </div>
            <button type="submit" className="btn-primary">
              Send message
            </button>
            {status === "note" && (
              <p className="text-[13.5px] text-ink/50 dark:text-paper/50">
                This form isn&apos;t connected to a backend yet — see the
                README for how to wire it to Formspree or an API route.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
