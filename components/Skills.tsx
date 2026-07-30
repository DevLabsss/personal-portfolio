"use client";

import { motion } from "framer-motion";
import GithubStats from "@/components/github/GithubStats";

interface SkillsProps {
  dict: {
    title: string;
    accent: string;
  };
}

interface Technology {
  name: string;
  img: string;
}

const technologies: Technology[] = [
  {
    name: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Linux",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

export default function Skills({ dict: _dict }: SkillsProps) {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-white py-24 md:py-28 lg:py-32"
    >
      {/* HEADER */}
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-20"
        >
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-11 bg-zinc-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-zinc-500">
                Learning / Exploration
              </span>
            </div>

            <h2 className="text-[48px] font-black leading-[0.9] tracking-[-0.06em] text-zinc-950 sm:text-[60px] lg:text-[76px]">
              Learning &
              <br />
              Exploring<span className="text-zinc-300">.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="ml-auto max-w-[540px] text-base leading-8 text-zinc-500 md:text-lg lg:text-right">
              Technologies and tools I&apos;ve encountered through academic
              work, projects, practice, and personal exploration. Each one
              represents something I&apos;ve learned along the way as I continue
              to explore and grow.
            </p>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div className="mt-16 h-px w-full bg-zinc-950 md:mt-20" />

        {/* LABEL */}
        <div className="mt-10 flex items-center justify-between gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
            Technologies I&apos;ve Explored
          </p>

          <p className="hidden text-xs text-zinc-400 sm:block">
            Always learning, never finished.
          </p>
        </div>
      </div>

      {/* TECHNOLOGIES */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mt-8"
      >
        {/* FADE LEFT */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />

        {/* FADE RIGHT */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <div className="overflow-hidden py-3">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            <TechnologyList technologies={technologies} />

            <TechnologyList technologies={technologies} />
          </motion.div>
        </div>
      </motion.div>

      {/* GITHUB */}
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-12">
        <div className="mt-20 border-t border-zinc-200 pt-14 md:mt-24 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                GitHub / Activity
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-zinc-950 md:text-4xl">
                Building Along the Way
                <span className="text-zinc-300">.</span>
              </h3>
            </div>

            <p className="max-w-[430px] text-sm leading-7 text-zinc-500 md:text-right">
              A glimpse into my ongoing activity, experiments, and projects as I
              continue learning through code.
            </p>
          </motion.div>

          <GithubStats />
        </div>

        {/* CLOSING */}
        <div className="mt-14 border-t border-zinc-200 pt-8">
          <p className="mx-auto max-w-[680px] text-center text-sm leading-7 text-zinc-400">
            This is an ongoing journey. I&apos;m continuously learning,
            experimenting, and expanding my understanding through every project
            and experience.
          </p>
        </div>
      </div>
    </section>
  );
}

function TechnologyList({ technologies }: { technologies: Technology[] }) {
  return (
    <div className="flex shrink-0 gap-4 pr-4 md:gap-5 md:pr-5">
      {technologies.map((technology, index) => (
        <TechnologyCard
          key={`${technology.name}-${index}`}
          technology={technology}
        />
      ))}
    </div>
  );
}

function TechnologyCard({ technology }: { technology: Technology }) {
  return (
    <div className="group flex h-[68px] min-w-[165px] items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-50">
        <img
          src={technology.img}
          alt={technology.name}
          className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <span className="whitespace-nowrap text-sm font-semibold text-zinc-700">
        {technology.name}
      </span>
    </div>
  );
}
