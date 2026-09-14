"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-editorial ${
        scrolled
          ? "bg-paper/85 dark:bg-ink/85 backdrop-blur-md border-b border-ink/10 dark:border-paper/10 shadow-[0_1px_0_rgba(16,20,28,0.03)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        <a href="#home" className="font-serif text-lg tracking-tight text-ink dark:text-paper">
          Khadija Hanif
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-[14.5px]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-ink/70 dark:text-paper/70 transition-colors duration-200 hover:text-signal dark:hover:text-signal-light after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-signal dark:after:bg-signal-light after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-ink/15 dark:border-paper/15 transition-colors hover:border-signal dark:hover:border-signal-light"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  className="list-none"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[15px] text-ink/80 dark:text-paper/80 hover:text-signal dark:hover:text-signal-light"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
