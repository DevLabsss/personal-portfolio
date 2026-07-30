"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, MapPin, BadgeCheck } from "lucide-react";

export default function Badge() {
  return (
    <motion.div
      whileHover={{ rotate: -1, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="relative w-full max-w-[350px] min-w-[280px] overflow-hidden rounded-[34px] bg-white shadow-[0_35px_90px_rgba(0,0,0,.18)]"
    >
      {/* ===== TOP =====
          Was a hardcoded `h-[455px]`, which is shorter than the content
          it holds (photo + name + divider + two info rows comfortably
          need ~515px). Content past 455px was clipped by this section's
          box and butted straight into the footer below — the "footer
          collides with content" bug. Sizing to content (`pb-10` instead
          of a fixed height) fixes that and keeps the same proportions
          regardless of name length / translation. */}
      <div className="relative px-8 pt-10 pb-10">
        {/* SLOT UNTUK HOOK — widened to match the connector above (w-2)
            for a seamless hook-to-badge connection */}
        <div className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2">
          <div className="absolute left-1/2 top-0 h-10 w-2 -translate-x-1/2 rounded-b-full bg-zinc-500" />
        </div>

        {/* ICON */}
        <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100">
          <Code2 size={20} />
        </div>

        {/* FOTO */}
        <div className="mx-auto mt-12 h-36 w-36 overflow-hidden rounded-full border-[5px] border-white shadow-xl ring-1 ring-zinc-200">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={144}
            height={144}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* NAMA */}
        <h2 className="mt-7 text-center text-[27px] font-black leading-none tracking-[-0.04em] text-zinc-900">
          ACHMAD
          <br />
          SYAHRIL FAUZI
        </h2>

        {/* DIVIDER */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-200" />
          <div className="h-2 w-2 rounded-full bg-zinc-900" />
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        {/* INFO */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center rounded-2xl bg-zinc-100 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
              <Code2 size={17} />
            </div>
            <span className="ml-4 font-medium text-zinc-700">
              Informatics Engineering Student
            </span>
          </div>

          <div className="flex items-center rounded-2xl bg-zinc-100 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
              <MapPin size={17} />
            </div>
            <span className="ml-4 font-medium text-zinc-700">Indonesia</span>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="flex h-16 items-center justify-between bg-zinc-950 px-6 text-white">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-3 w-3 rounded-full bg-emerald-400"
          />
          <span className="font-semibold">Available</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold">@devlabsss</span>
          <BadgeCheck size={18} className="fill-sky-500 text-white" />
        </div>
      </div>
    </motion.div>
  );
}
