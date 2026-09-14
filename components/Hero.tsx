"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowDown, UserRound } from "lucide-react";
import { siteConfig } from "@/config/site";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

interface HeroProps {
  /** Whether public/images/profile.jpg (or the configured path) exists. */
  hasProfileImage: boolean;
  /** Whether the configured CV PDF exists. */
  hasCV: boolean;
}

export function Hero({ hasProfileImage, hasCV }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28"
    >
      {/* Ambient background accent — one deliberate gradient wash, not decoration everywhere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-signal/10 dark:bg-signal-light/10 blur-[120px]"
      />

      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.p variants={item} className="eyebrow mb-4">
            Data Science Undergraduate — UET Lahore
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif leading-[1.05] tracking-tight text-ink dark:text-paper"
          >
            <span className="block text-2xl sm:text-3xl font-normal text-ink/60 dark:text-paper/60 mb-1">
              Hi, I&apos;m
            </span>
            <span className="block text-[2.75rem] sm:text-6xl lg:text-7xl">
              Khadija Hanif
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-lg sm:text-xl text-ink/70 dark:text-paper/70"
          >
            AI &amp; Machine Learning enthusiast, building toward reliable and
            explainable intelligent systems.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-prose mx-auto lg:mx-0 text-[16px] sm:text-[17px] leading-relaxed text-ink/70 dark:text-paper/70"
          >
            I am a Data Science undergraduate interested in building
            reliable, explainable, and intelligent AI systems that solve
            real-world problems.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            {hasCV ? (
              <a href={siteConfig.cvPath} download className="btn-secondary">
                Download CV
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="CV coming soon"
                className="inline-flex items-center gap-2 rounded-sm border border-ink/10 dark:border-paper/10 px-5 py-3 text-[15px] font-medium text-ink/35 dark:text-paper/35 cursor-not-allowed select-none"
              >
                CV coming soon
              </span>
            )}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center lg:justify-start gap-5"
          >
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-ink/55 dark:text-paper/55 transition-all duration-300 hover:text-signal dark:hover:text-signal-light hover:-translate-y-0.5"
            >
              <Github size={21} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink/55 dark:text-paper/55 transition-all duration-300 hover:text-signal dark:hover:text-signal-light hover:-translate-y-0.5"
            >
              <Linkedin size={21} />
            </a>
            <a
              href={siteConfig.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="text-ink/55 dark:text-paper/55 transition-all duration-300 hover:text-signal dark:hover:text-signal-light hover:-translate-y-0.5"
            >
              <Code2 size={21} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto order-1 lg:order-2 w-full max-w-[280px] sm:max-w-sm"
        >
          {/* Faint plotted-line motif, a single nod to the data-science subject matter */}
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[2rem] data-motif text-signal dark:text-signal-light hidden sm:block"
          />
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-signal/25 via-signal/5 to-transparent blur-2xl"
          />

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
            className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ink/10 dark:border-paper/10 shadow-[0_20px_60px_-25px_rgba(16,20,28,0.35)] transition-transform duration-500 ease-editorial hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-25px_rgba(47,110,92,0.35)]"
          >
            {hasProfileImage ? (
              <Image
                src={siteConfig.profileImage}
                alt="Portrait of Khadija Hanif"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
                className="object-cover"
                priority
              />
            ) : (
              <div
                role="img"
                aria-label="Profile photo placeholder — photo coming soon"
                className="h-full w-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-soft to-signal-dark text-paper/70"
              >
                <UserRound size={56} strokeWidth={1.25} />
                <span className="font-mono text-[13px] tracking-tight">
                  Photo coming soon
                </span>
              </div>
            )}
            <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-ink/5 dark:ring-paper/10" />
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center justify-center text-ink/50 dark:text-paper/50 hover:text-signal dark:hover:text-signal-light transition-colors motion-safe:animate-bounce"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
