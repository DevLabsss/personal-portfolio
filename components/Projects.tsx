"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderCode, X } from "lucide-react";

type ProjectCategory =
  | "Web"
  | "Desktop"
  | "Data / ML"
  | "UI / UX"
  | "Web3"
  | "Other";

interface Project {
  slug: string;

  frontmatter: {
    title: string;
    type?: string;
    category?: ProjectCategory;
    featured?: boolean;

    description: string;
    image?: string;

    tags?: string[];

    github?: string;
    link?: string;
  };
}

interface ProjectsProps {
  projects: Project[];
}

const categories = [
  "All",
  "Web",
  "Desktop",
  "Data / ML",
  "UI / UX",
  "Web3",
  "Other",
] as const;

type FilterCategory = (typeof categories)[number];

export default function Projects({ projects }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);

  const [category, setCategory] = useState<FilterCategory>("All");

  // Maksimal 6 project di homepage
  const selectedProjects = projects
    .filter((project) => project.frontmatter.featured)
    .slice(0, 6);

  // Project di modal
  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.frontmatter.category === category);

  return (
    <>
      {/* ================================================= */}
      {/* PROJECT SECTION */}
      {/* ================================================= */}

      <section
        id="projects"
        className="
          relative
          w-full
          overflow-hidden
          bg-white
          py-24
          md:py-28
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1280px]
            px-6
            md:px-10
            lg:px-12
          "
        >
          {/* HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
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
                  Projects / Selected Work
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
                Selected
                <br />
                Projects
                <span className="text-zinc-300">.</span>
              </h2>
            </div>

            <div className="lg:pb-2 lg:text-right">
              <p
                className="
                  ml-auto
                  max-w-[520px]
                  text-base
                  leading-8
                  text-zinc-500

                  md:text-lg
                "
              >
                Academic, community, and personal projects where I turn ideas
                into practical digital solutions.
              </p>
            </div>
          </motion.div>

          {/* DIVIDER */}

          <div className="mt-16 h-px w-full bg-zinc-900 md:mt-20" />

          {/* SELECTED PROJECTS */}

          <div>
            {selectedProjects.map((project, index) => (
              <FeaturedProject
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* VIEW ALL */}

          {projects.length > selectedProjects.length && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                mt-12
                flex
                justify-center
              "
            >
              <button
                type="button"
                onClick={() => setShowAll(true)}
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
                  py-3.5
                  text-sm
                  font-bold
                  text-zinc-950
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-zinc-950
                  hover:bg-zinc-950
                  hover:text-white
                "
              >
                View All Projects
                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================================================= */}
      {/* VIEW ALL MODAL */}
      {/* ================================================= */}

      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setShowAll(false)}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/50
              p-4
              backdrop-blur-sm

              md:p-8
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                flex
                max-h-[90vh]
                w-full
                max-w-6xl
                flex-col
                overflow-hidden
                rounded-[32px]
                bg-white
                shadow-2xl
              "
            >
              {/* MODAL HEADER */}

              <div
                className="
                  border-b
                  border-zinc-200
                  px-6
                  py-6

                  md:px-8
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-6
                  "
                >
                  <div>
                    <div
                      className="
                        mb-3
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <FolderCode size={15} className="text-zinc-400" />

                      <span
                        className="
                          font-mono
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.25em]
                          text-zinc-400
                        "
                      >
                        Project Archive
                      </span>
                    </div>

                    <h3
                      className="
                        text-3xl
                        font-black
                        tracking-[-0.04em]
                        text-zinc-950

                        md:text-4xl
                      "
                    >
                      All Projects
                      <span className="text-zinc-300">.</span>
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-zinc-500
                      "
                    >
                      {projects.length} projects in my development archive.
                    </p>
                  </div>

                  {/* CLOSE */}

                  <button
                    type="button"
                    onClick={() => setShowAll(false)}
                    aria-label="Close projects"
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-zinc-100
                      text-zinc-950
                      transition-all

                      hover:bg-zinc-950
                      hover:text-white
                    "
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* FILTER */}

                <div
                  className="
                    mt-6
                    flex
                    gap-2
                    overflow-x-auto
                    pb-1
                  "
                >
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`
                        shrink-0
                        rounded-full
                        px-4
                        py-2
                        text-xs
                        font-bold
                        transition-all

                        ${
                          category === item
                            ? "bg-zinc-950 text-white"
                            : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-950"
                        }
                      `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* MODAL CONTENT */}

              <div
                className="
                  overflow-y-auto
                  p-6
                  md:p-8
                "
              >
                {filteredProjects.length > 0 ? (
                  <motion.div
                    layout
                    className="
                      grid
                      grid-cols-1
                      gap-5

                      sm:grid-cols-2

                      lg:grid-cols-3
                    "
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredProjects.map((project, index) => (
                        <ProjectCard
                          key={project.slug}
                          project={project}
                          index={index}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <div
                    className="
                      flex
                      min-h-[300px]
                      items-center
                      justify-center
                    "
                  >
                    <p className="text-sm text-zinc-400">
                      No projects in this category.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ========================================================= */
/* FEATURED PROJECT */
/* ========================================================= */

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
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
      }}
      className="
        group
        grid
        grid-cols-1
        gap-7
        border-b
        border-zinc-200
        py-12

        md:py-16

        lg:grid-cols-[100px_minmax(0,1fr)_440px]
        lg:gap-10

        xl:grid-cols-[120px_minmax(0,1fr)_500px]
        xl:gap-12
      "
    >
      {/* NUMBER */}

      <div className="order-2 lg:order-none">
        <span
          className="
            text-[54px]
            font-black
            leading-none
            tracking-[-0.06em]
            text-zinc-200
            transition-colors
            duration-300

            group-hover:text-zinc-300

            md:text-[64px]
          "
        >
          {number}
        </span>
      </div>

      {/* CONTENT */}

      <div
        className="
          order-3
          flex
          min-w-0
          flex-col
          justify-center

          lg:order-none
        "
      >
        <div
          className="
            mb-5
            flex
            items-center
            gap-3
            text-zinc-500
          "
        >
          <FolderCode size={16} strokeWidth={1.8} />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]

              sm:text-[11px]
            "
          >
            {project.frontmatter.type || "Project"}
          </span>
        </div>

        <h3
          className="
            text-3xl
            font-black
            leading-tight
            tracking-[-0.04em]
            text-zinc-950

            md:text-[38px]
          "
        >
          {project.frontmatter.title}
        </h3>

        <p
          className="
            mt-5
            max-w-[580px]
            text-[15px]
            leading-7
            text-zinc-500

            md:text-base
          "
        >
          {project.frontmatter.description}
        </p>

        {/* TAGS */}

        {!!project.frontmatter.tags?.length && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.frontmatter.tags.slice(0, 5).map((tag) => (
              <span
                key={`${project.slug}-${tag}`}
                className="
                    rounded-full
                    border
                    border-zinc-200
                    bg-zinc-50
                    px-3
                    py-1.5
                    text-[11px]
                    font-semibold
                    text-zinc-600
                  "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <ProjectActions project={project} />
      </div>

      {/* IMAGE */}

      <div
        className="
          relative
          order-1
          aspect-[16/10]
          w-full
          overflow-hidden
          rounded-[24px]
          border
          border-zinc-200
          bg-zinc-100

          lg:order-none
          lg:self-center
        "
      >
        <Image
          src={project.frontmatter.image || "/projects/placeholder.webp"}
          alt={project.frontmatter.title}
          fill
          sizes="(max-width: 1024px) 100vw, 500px"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.035]
          "
        />
      </div>
    </motion.article>
  );
}

/* ========================================================= */
/* MODAL PROJECT CARD */
/* ========================================================= */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{
        duration: 0.3,
        delay: Math.min(index * 0.04, 0.2),
      }}
      className="
        group
        overflow-hidden
        rounded-[24px]
        border
        border-zinc-200
        bg-white
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-zinc-300
        hover:shadow-xl
      "
    >
      {/* IMAGE */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          bg-zinc-100
        "
      >
        <Image
          src={project.frontmatter.image || "/projects/placeholder.webp"}
          alt={project.frontmatter.title}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-700

            group-hover:scale-[1.04]
          "
        />

        {/* CATEGORY */}

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-white/90
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-zinc-600
            shadow-sm
            backdrop-blur-md
          "
        >
          {project.frontmatter.category || "Other"}
        </span>
      </div>

      {/* CONTENT */}

      <div className="p-5">
        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-zinc-400
          "
        >
          {project.frontmatter.type || "Project"}
        </span>

        <h4
          className="
            mt-2
            line-clamp-2
            text-xl
            font-black
            tracking-[-0.03em]
            text-zinc-950
          "
        >
          {project.frontmatter.title}
        </h4>

        <p
          className="
            mt-3
            line-clamp-3
            text-sm
            leading-6
            text-zinc-500
          "
        >
          {project.frontmatter.description}
        </p>

        {/* TAGS */}

        {!!project.frontmatter.tags?.length && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.frontmatter.tags.slice(0, 3).map((tag) => (
              <span
                key={`${project.slug}-modal-${tag}`}
                className="
                    rounded-full
                    bg-zinc-100
                    px-2.5
                    py-1
                    text-[10px]
                    font-semibold
                    text-zinc-500
                  "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <ProjectActions project={project} compact />
      </div>
    </motion.article>
  );
}

/* ========================================================= */
/* ACTION BUTTONS */
/* ========================================================= */

function ProjectActions({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div
      className={`
        flex
        flex-wrap
        items-center
        gap-3

        ${compact ? "mt-5" : "mt-8"}
      `}
    >
      {/* GITHUB */}

      {project.frontmatter.github && (
        <a
          href={project.frontmatter.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-zinc-300
            bg-white
            px-4
            py-2.5
            text-xs
            font-bold
            text-zinc-900
            transition-all
            duration-300

            hover:border-zinc-950
            hover:bg-zinc-950
            hover:text-white
          "
        >
          GitHub
          <ArrowUpRight size={13} />
        </a>
      )}

      {/* LIVE DEMO */}

      {project.frontmatter.link && (
        <a
          href={project.frontmatter.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-zinc-950
            px-4
            py-2.5
            text-xs
            font-bold
            text-white
            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-zinc-800
          "
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      )}
    </div>
  );
}
