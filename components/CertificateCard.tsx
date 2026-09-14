"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileImage } from "lucide-react";
import type { Certificate } from "@/data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
  imageExists: boolean;
}

export function CertificateCard({ certificate, imageExists }: CertificateCardProps) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    const trigger = triggerRef.current;

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      (previouslyFocused ?? trigger)?.focus();
    };
  }, [open]);

  const thumbnail = (
    <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
      {imageExists ? (
        <Image
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.04]"
        />
      ) : (
        <div
          role="img"
          aria-label={`${certificate.title} certificate image not yet added`}
          className="h-full w-full flex flex-col items-center justify-center gap-2 text-paper/60"
        >
          <FileImage size={30} strokeWidth={1.25} />
          <span className="font-mono text-[12.5px]">Image coming soon</span>
        </div>
      )}
    </div>
  );

  const meta = (
    <div className="p-4">
      <h3 className="font-serif text-[16px] text-ink dark:text-paper">
        {certificate.title}
      </h3>
      <p className="text-[14px] text-ink/60 dark:text-paper/60 mt-0.5">
        {certificate.organization} · {certificate.date}
      </p>
    </div>
  );

  // Without an image there is nothing to preview, so render a plain,
  // non-interactive card instead of a button that opens an empty lightbox.
  if (!imageExists) {
    return (
      <div className="text-left border border-ink/10 dark:border-paper/10 rounded-lg overflow-hidden w-full">
        {thumbnail}
        {meta}
      </div>
    );
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="group text-left border border-ink/10 dark:border-paper/10 rounded-lg overflow-hidden w-full transition-all duration-300 ease-editorial hover:border-signal/40 dark:hover:border-signal-light/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(16,20,28,0.35)]"
      >
        {thumbnail}
        {meta}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 sm:p-6"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${certificate.title} preview`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-paper dark:bg-ink rounded-lg overflow-hidden"
            >
              <button
                ref={closeButtonRef}
                onClick={() => setOpen(false)}
                aria-label="Close preview"
                className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-ink/70 text-paper transition-colors hover:bg-ink"
              >
                <X size={18} />
              </button>
              <div className="relative aspect-[4/3]">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate, full size`}
                  fill
                  sizes="90vw"
                  className="object-contain bg-ink-soft"
                />
              </div>
              <div className="p-5 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg text-ink dark:text-paper">
                    {certificate.title}
                  </h3>
                  <p className="text-[14px] text-ink/60 dark:text-paper/60">
                    {certificate.organization} · {certificate.date}
                  </p>
                </div>
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[14px] text-signal dark:text-signal-light shrink-0"
                  >
                    Verify <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
