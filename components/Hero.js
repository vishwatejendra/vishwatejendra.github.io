"use client";
import { motion } from "framer-motion";
import { content } from "@/content";

const line = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const word = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const headline = content.profile.headline;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0d1117]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(13,17,23,0.2),rgba(13,17,23,0.92)_62%,#0a0a0a)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-300 via-white/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs text-white/70"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {content.profile.availabilityBadge}
          </motion.div>

          <motion.h1
            variants={line}
            initial="hidden"
            animate="show"
            className="font-display text-[13vw] font-extrabold leading-[0.92] tracking-tight md:text-[5.4vw]"
          >
            {headline.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <motion.span
                  variants={word}
                  className={`inline-block ${
                    i === headline.length - 1 ? "text-gradient" : ""
                  }`}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-7 max-w-md text-lg font-light leading-relaxed text-white/55"
          >
            {content.profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              data-magnetic
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              View the Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              data-magnetic
              className="glass rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:border-teal-300/60"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40"
      >
        Scroll
        <span className="h-9 w-[1px] bg-gradient-to-b from-teal-300 to-transparent" />
      </motion.div>
    </section>
  );
}
