"use client";

import { motion } from "framer-motion";
import { Briefcase, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/effects/MagneticButton";
import Lanyard from "@/components/ui/lanyard/Lanyard";

const InteractiveParticles = dynamic(
  () => import("@/components/effects/InteractiveParticles"),
  { ssr: false },
);

interface HeroProps {
  dict: {
    greeting: string;
    role: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
  };
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        bg-white
        pt-24
        lg:pt-16
      "
    >
      {/* Background */}
      <InteractiveParticles />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          md:px-10
          lg:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-14

            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-10

            xl:grid-cols-[1.2fr_0.8fr]
            xl:gap-16
          "
        >
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20 max-w-[720px]"
          >
            {/* Greeting */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-zinc-400" />

              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                {dict.greeting}
              </p>
            </div>

            {/* Name */}
            <h1
              className="
    text-[52px]
    font-black
    leading-[0.92]
    tracking-[-0.055em]
    text-zinc-950

    sm:text-[64px]
    md:text-[72px]
    lg:text-[72px]
    xl:text-[82px]
  "
            >
              {/* ACHMAD */}
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  Achmad
                </motion.span>
              </span>

              {/* SYAHRIL FAUZI */}
              <span className="mt-2 block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative block w-fit"
                >
                  <span className="relative z-10">Syahril Fauzi</span>

                  {/* Animated highlight */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.4,
                      delay: 1.2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      transformOrigin: "left",
                    }}
                    className="
          absolute
          bottom-[4%]
          left-0
          -z-0
          h-[18%]
          w-full
          bg-zinc-200
        "
                  />

                  {/* Dot */}
                  <motion.span
                    animate={{
                      opacity: [0.25, 1, 0.25],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
          relative
          z-10
          ml-1
          inline-block
          text-zinc-300
        "
                  >
                    .
                  </motion.span>
                </motion.span>
              </span>
            </h1>

            {/* Role */}
            <div className="mt-8">
              <p
                className="
                  max-w-[680px]
                  text-xl
                  font-black
                  uppercase
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-zinc-950

                  sm:text-2xl
                  lg:text-[28px]
                  xl:text-[30px]
                "
              >
                {dict.role}
              </p>
            </div>

            {/* Social */}
            <div className="mt-7 flex items-center gap-5">
              {/* GitHub */}
              <a
                href="https://github.com/devlabsss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  text-zinc-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-zinc-950
                "
              >
                <svg
                  className="h-7 w-7 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.955-.266 1.98-.399 3-.405 1.02.006 2.045.139 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/rilthegreat__"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  text-zinc-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-zinc-950
                "
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/achmadsyahrilfauzi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  text-zinc-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-zinc-950
                "
              >
                <svg
                  className="h-7 w-7 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Tagline */}
            <p
              className="
                mt-8
                max-w-[620px]
                text-base
                font-medium
                leading-8
                text-zinc-500
                md:text-lg
                md:leading-9
              "
            >
              {dict.tagline}
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a
                  href="#projects"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-zinc-950
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                    transition-all
                    duration-300

                    hover:bg-zinc-800
                    hover:shadow-lg
                  "
                >
                  <Briefcase size={18} />
                  {dict.ctaProjects}
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-zinc-300
                    bg-white
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-zinc-950
                    transition-all
                    duration-300

                    hover:border-zinc-950
                    hover:bg-zinc-950
                    hover:text-white
                  "
                >
                  <Mail size={18} />
                  {dict.ctaContact}
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
    relative
    flex
    w-full
    min-h-[500px]
    items-start
    justify-center

    sm:min-h-[560px]

    lg:min-h-[680px]
    lg:items-center
    lg:justify-end
    lg:-translate-y-12

    xl:-translate-y-16
  "
          >
            <Lanyard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
