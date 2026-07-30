"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

interface AboutProps {
  dict: {
    sectionTitle: string;
    greeting: string;
    name: string;
    role: string;
    bio: string;
    downloadCv: string;
  };
}

export default function About({ dict }: AboutProps) {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        py-16
        md:py-20
        lg:py-24
        overflow-hidden
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-5xl
          grid-cols-1
          items-center
          gap-12
          px-6
          md:grid-cols-[340px_1fr]
          md:gap-14
          lg:grid-cols-[360px_1fr]
          lg:gap-16
        "
      >
        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            mx-auto
            w-full
            max-w-[320px]
            md:max-w-none
          "
        >
          {/* Background accent */}
          <div
            className="
              absolute
              inset-0
              translate-x-4
              translate-y-4
              -rotate-2
              rounded-[32px]
              bg-zinc-100
            "
          />

          {/* Photo */}
          <div
            className="
              relative
              aspect-[4/5]
              w-full
              overflow-hidden
              rounded-[32px]
              border
              border-zinc-200
              bg-white
              shadow-xl
            "
          >
            <Image
              src="/images/about.jpg"
              alt={dict.name}
              fill
              priority
              sizes="(max-width: 768px) 320px, 360px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          {/* Section label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-400" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-zinc-500
              "
            >
              {dict.sectionTitle}
            </span>
          </div>

          {/* Greeting */}
          <p
            className="
              mb-3
              text-xl
              font-black
              uppercase
              tracking-tight
              text-zinc-950
              md:text-2xl
            "
          >
            {dict.greeting}
          </p>

          {/* Name */}
          <h2
            className="
              inline-block
              rounded-lg
              bg-zinc-950
              px-3
              py-1.5
              text-2xl
              font-black
              uppercase
              leading-none
              tracking-tight
              text-white
              sm:text-3xl
              lg:text-[34px]
            "
          >
            {dict.name}
          </h2>

          {/* Role */}
          <div className="mt-3">
            <span
              className="
                inline-block
                rounded-lg
                bg-zinc-200
                px-3
                py-1.5
                text-lg
                font-black
                uppercase
                leading-tight
                tracking-tight
                text-zinc-900
                sm:text-xl
                lg:text-2xl
              "
            >
              {dict.role}
            </span>
          </div>

          {/* Bio */}
          <div
            className="
              mt-7
              border-l-[3px]
              border-zinc-900
              pl-5
              md:pl-6
            "
          >
            <p
              className="
                whitespace-pre-line
                text-[15px]
                font-medium
                leading-7
                text-zinc-600
                md:text-base
                md:leading-8
              "
            >
              {dict.bio}
            </p>
          </div>

          {/* CV */}
          <div className="mt-7">
            <a
              href="/CV-Achmad-Syahril-Fauzi.pdf"
              download="CV-Achmad-Syahril-Fauzi.pdf"
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                bg-zinc-950
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-zinc-800
                hover:shadow-lg
              "
            >
              <Download className="h-4 w-4" />
              {dict.downloadCv}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
