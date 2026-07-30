"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";

interface ExperienceProps {
  dict: {
    title: string;
    accent: string;
    technologiesLabel: string;
    list: {
      company: string;
      role: string;
      period: string;
      location: string;
      description: string[];
      technologies: string[];
    }[];
  };
}

interface ExperienceItem {
  number: string;
  category: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    number: "01",
    category: "WEB3 / COMMUNITY",
    role: "Community & Testnet",
    company: "Union Labs",
    period: "Jun 2024 — Sep 2025",
    location: "Remote",
    description:
      "Contributed to the Union ecosystem through testnet participation, community coordination, content creation, discussions, and campaign support to increase community engagement and project awareness.",
    skills: [
      "Web3",
      "Blockchain Testing",
      "Community Management",
      "Content Creation",
    ],
  },
  {
    number: "02",
    category: "WEB3 / TESTNET",
    role: "Testnet Coordinator & Community Contributor",
    company: "Elys Network",
    period: "Jun 2024 — Dec 2024",
    location: "Remote",
    description:
      "Supported testnet activities and community growth by coordinating testers, identifying issues, providing feedback, facilitating discussions, and promoting project activities.",
    skills: [
      "Blockchain Testing",
      "Testnet Coordination",
      "Community Engagement",
    ],
  },
  {
    number: "03",
    category: "BLOCKCHAIN TESTING",
    role: "Testnet Coordinator",
    company: "Initia Labs",
    period: "May 2023 — May 2024",
    location: "Remote",
    description:
      "Participated in blockchain network testing and supported testnet activities within the Initia ecosystem.",
    skills: ["Blockchain Testing", "Web3", "Testnet"],
  },
  {
    number: "04",
    category: "PROFESSIONAL",
    role: "Store Operations",
    company: "Indomaret Group",
    period: "Apr 2023 — Apr 2024",
    location: "Tangerang, Indonesia",
    description:
      "Gained experience across store operations, cashiering, merchandising, customer service, inventory handling, and day-to-day retail operations.",
    skills: ["Customer Service", "Retail Operations", "Inventory", "Teamwork"],
  },

  // Hidden by default
  {
    number: "05",
    category: "WEB3 / TESTNET",
    role: "Testnet Coordinator",
    company: "Xterio",
    period: "May 2023 — May 2024",
    location: "Remote",
    description:
      "Participated in testnet activities and contributed to early-stage testing within the Xterio ecosystem.",
    skills: ["Testnet", "Web3", "Blockchain"],
  },
  {
    number: "06",
    category: "PROFESSIONAL",
    role: "Production Staff",
    company: "ParagonCorp",
    period: "Oct 2022 — Mar 2023",
    location: "Tangerang, Indonesia",
    description:
      "Supported production activities in an on-site manufacturing environment while following operational procedures and collaborating with the production team.",
    skills: ["Production", "Operations", "Teamwork"],
  },
  {
    number: "07",
    category: "PROFESSIONAL",
    role: "Store Helper / Intern",
    company: "Alfamart",
    period: "May 2022 — Aug 2022",
    location: "Tangerang, Indonesia",
    description:
      "Supported daily store operations including product handling, store organization, and customer service.",
    skills: ["Retail Operations", "Customer Service", "Teamwork"],
  },
];

const INITIAL_VISIBLE = 4;

export default function Experience({ dict: _dict }: ExperienceProps) {
  const [showAll, setShowAll] = useState(false);

  const mainExperiences = experiences.slice(0, INITIAL_VISIBLE);
  const additionalExperiences = experiences.slice(INITIAL_VISIBLE);

  return (
    <section
      id="experience"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-24
        md:py-32
        lg:py-36
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
          px-6
          md:px-10
          lg:px-12
        "
      >
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="
            grid
            grid-cols-1
            items-end
            gap-10
            lg:grid-cols-2
            lg:gap-20
          "
        >
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-11 bg-zinc-400" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-zinc-500
                "
              >
                Journey / Experience
              </span>
            </div>

            <h2
              className="
                text-[48px]
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                text-zinc-950

                sm:text-[60px]
                lg:text-[76px]
              "
            >
              Experience
              <span className="text-zinc-300">.</span>
            </h2>
          </div>

          <div className="lg:pb-2 lg:text-right">
            <p
              className="
                ml-auto
                max-w-[500px]
                text-base
                leading-8
                text-zinc-500
                md:text-lg
              "
            >
              Experiences that have shaped how I work, collaborate, adapt, and
              grow — across professional environments and digital communities.
            </p>
          </div>
        </motion.div>

        {/* DIVIDER */}

        <div className="mt-16 h-px w-full bg-zinc-900 md:mt-20" />

        {/* ================= MAIN EXPERIENCE ================= */}

        <div>
          {mainExperiences.map((experience, index) => (
            <ExperienceRow
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
            />
          ))}

          {/* ================= ADDITIONAL ================= */}

          <AnimatePresence initial={false}>
            {showAll &&
              additionalExperiences.map((experience, index) => (
                <motion.div
                  key={`${experience.company}-${experience.role}`}
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <ExperienceRow
                    experience={experience}
                    index={index + INITIAL_VISIBLE}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* ================= VIEW ALL ================= */}

        <div className="flex justify-center pt-12">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-zinc-300
              bg-white
              px-6
              py-3
              text-sm
              font-bold
              text-zinc-900
              transition-all
              duration-300

              hover:border-zinc-950
              hover:bg-zinc-950
              hover:text-white
            "
          >
            {showAll ? "Show Less" : "View Full Experience"}

            {showAll ? (
              <ArrowUp
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />
            ) : (
              <ArrowDown
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE ROW
========================================================= */

function ExperienceRow({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.04, 0.15),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        grid
        grid-cols-1
        gap-7
        border-b
        border-zinc-200
        py-12

        md:py-14

        lg:grid-cols-[130px_1fr_230px]
        lg:gap-12
      "
    >
      {/* ================= NUMBER ================= */}

      <div>
        <span
          className="
            text-[54px]
            font-black
            leading-none
            tracking-[-0.06em]
            text-zinc-200
            transition-colors
            duration-300

            md:text-[64px]

            group-hover:text-zinc-300
          "
        >
          {experience.number}
        </span>
      </div>

      {/* ================= CONTENT ================= */}

      <div>
        {/* CATEGORY */}

        <div
          className="
            mb-5
            flex
            items-center
            gap-3
            text-zinc-500
          "
        >
          <BriefcaseBusiness size={15} strokeWidth={1.8} />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.24em]

              sm:text-[11px]
            "
          >
            {experience.category}
          </span>
        </div>

        {/* ROLE */}

        <h3
          className="
            max-w-[650px]
            text-[28px]
            font-black
            leading-tight
            tracking-[-0.04em]
            text-zinc-950

            md:text-[36px]
          "
        >
          {experience.role}
        </h3>

        {/* COMPANY */}

        <p
          className="
            mt-2
            text-lg
            font-bold
            text-zinc-500

            md:text-xl
          "
        >
          {experience.company}
        </p>

        {/* DESCRIPTION */}

        <p
          className="
            mt-6
            max-w-[720px]
            text-[15px]
            leading-7
            text-zinc-500

            md:text-base
            md:leading-8
          "
        >
          {experience.description}
        </p>

        {/* SKILLS */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-2
          "
        >
          {experience.skills.map((skill, skillIndex) => (
            <div key={skill} className="flex items-center gap-3">
              <span
                className="
                  text-xs
                  font-semibold
                  text-zinc-500
                "
              >
                {skill}
              </span>

              {skillIndex !== experience.skills.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-zinc-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= META ================= */}

      <div
        className="
          flex
          flex-col
          gap-3

          lg:items-end
          lg:pt-1
          lg:text-right
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            font-bold
            text-zinc-900
          "
        >
          <CalendarDays size={15} strokeWidth={1.8} className="text-zinc-400" />

          <span>{experience.period}</span>
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-zinc-500
          "
        >
          <MapPin size={15} strokeWidth={1.8} className="text-zinc-400" />

          <span>{experience.location}</span>
        </div>
      </div>
    </motion.article>
  );
}
