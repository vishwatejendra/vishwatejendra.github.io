"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal, { SectionLabel } from "./Reveal";
import { content } from "@/content";

const experiments = content.experiments;

export default function Experiments() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (!resumeOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setResumeOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [resumeOpen]);

  const CardTag = ({ href, children, className }) => {
    if (href) {
      return (
        <button
          type="button"
          onClick={() => setResumeOpen(true)}
          className={`${className} text-left`}
        >
          {children}
        </button>
      );
    }

    return <div className={className}>{children}</div>;
  };

  return (
    <>
      <section id="experiments" className="relative mx-auto max-w-6xl px-6 py-32 md:px-12">
        <SectionLabel>The Playground</SectionLabel>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          Experiments &amp; <span className="text-gradient">curiosities.</span>
        </h2>
        <p className="mt-4 max-w-md text-white/50">
          Side quests, half-ideas, and things built purely because they were fun.
          This is where the personality lives.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <CardTag
                  href={e.href}
                  className={`interactive premium-card group relative block h-full w-full overflow-hidden rounded-2xl p-6 transition-colors ${
                    e.href
                      ? "ring-1 ring-teal-200/25"
                      : ""
                  }`}
                >
                  <div className="absolute -right-6 -top-6 text-7xl opacity-10 transition-all duration-500 group-hover:scale-125 group-hover:opacity-20">
                    {e.emoji}
                  </div>
                  <div className="relative flex h-full flex-col">
                    <span className="text-3xl">{e.emoji}</span>
                    <div className="mt-4 text-[11px] uppercase tracking-wider text-warm">
                      {e.tag}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-semibold">
                      {e.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {e.desc}
                    </p>
                    {e.cta && (
                      <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200/30 bg-teal-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100 transition-colors group-hover:border-teal-100/70 group-hover:bg-teal-200/18">
                        {e.cta}
                        <span className="transition-transform group-hover:scale-110">□</span>
                      </span>
                    )}
                  </div>
                </CardTag>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {resumeOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-xl md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onClick={() => setResumeOpen(false)}
        >
          <motion.div
            className="pdf-glass-shell relative flex h-[90svh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/12 px-5 py-4 md:px-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-teal-200/65">
                  Resume Preview
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-white">
                  Vishwa Pernapati - AI Engineer
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setResumeOpen(false)}
                className="interactive glass grid h-11 w-11 place-items-center rounded-full text-xl leading-none text-white/80 transition-colors hover:border-teal-200/70 hover:text-white"
                aria-label="Close resume preview"
              >
                ×
              </button>
            </div>

            <div className="min-h-0 flex-1 p-3 md:p-5">
              <div className="pdf-paper h-full overflow-hidden rounded-2xl p-2 md:p-3">
              <iframe
                title="Vishwa Pernapati resume"
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                className="h-full w-full rounded-xl border-0 bg-white"
              />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
