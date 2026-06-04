"use client";
import { motion } from "framer-motion";
import Reveal, { SectionLabel } from "./Reveal";
import { content } from "@/content";

const experiments = content.experiments;

export default function Experiments() {
  const CardTag = ({ href, children, className }) =>
    href ? (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    ) : (
      <div className={className}>{children}</div>
    );

  return (
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
                className={`interactive group relative block h-full overflow-hidden rounded-2xl border p-6 transition-colors ${
                  e.href
                    ? "border-teal-300/45 bg-teal-300/[0.045] hover:border-teal-200/80"
                    : "border-white/8 bg-white/[0.025]"
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
                      <span className="transition-transform group-hover:translate-x-1">↗</span>
                    </span>
                  )}
                </div>
              </CardTag>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
