"use client";
import { motion } from "framer-motion";
import { content } from "@/content";

const highlights = [
  "Personal portfolio",
  "Projects",
  "Skills",
  "Contact",
];

export default function Avatar() {
  const initials = content.profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      className="relative w-full max-w-[430px]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(45,212,191,0.18),transparent_52%)] blur-2xl" />

      <div className="glass overflow-hidden rounded-[2rem]">
        <div className="border-b border-white/10 px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Portfolio
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white">
                {content.profile.name}
              </h2>
            </div>
            <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/12 bg-white/[0.06] font-display text-2xl font-extrabold text-white">
              {initials}
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal-300 via-white to-purple-300"
              initial={{ width: "18%" }}
              animate={{ width: "72%" }}
              transition={{ duration: 1.2, delay: 0.85, ease: "easeOut" }}
            />
          </div>

          <div className="mt-7 space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75 + index * 0.1, duration: 0.55 }}
              >
                <span className="text-sm text-white/62">{item}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-teal-200/80">
                  Ready
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              Current focus
            </p>
            <p className="mt-3 text-sm leading-6 text-white/68">
              Turning projects, skills, and experience into a clear personal
              portfolio that can be shared professionally.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
