"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const getTechIcon = (tag: string) => {
  const icons: Record<string, string> = {
    Laravel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    ReactJS:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    Nextjs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    Typescript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    WordPress:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    JS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  };

  return icons[tag];
};

interface ProjectCardProps {
  project: any;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const title = project.frontmatter?.title || "Untitled Project";

  const description =
    project.frontmatter?.description || "No description available.";

  const image =
    project.frontmatter?.image || "/images/projects/placeholder.png";
  console.log("IMAGE:", image);

  const tags = project.frontmatter?.tags || [];

  const github = project.frontmatter?.github;

  const demo = project.frontmatter?.link;

  console.log({
    title,
    github,
    demo,
  });

  const [imgSrc, setImgSrc] = useState(image);

  return (
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
        margin: "-80px",
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      className="h-full"
    >
      <div
        className="
        group
        h-full
        overflow-hidden
        rounded-[32px]
        border
        border-zinc-200
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-zinc-400
      "
      >
        {/* IMAGE */}

        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            onError={() => setImgSrc("/images/projects/placeholder.png")}
            className="
    object-cover
    transition-transform
    duration-700
    group-hover:scale-110
  "
          />

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/20
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
          "
          />

          <div
            className="
            absolute
            bottom-5
            left-5
            translate-y-4
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
          >
            <span
              className="
              rounded-full
              bg-white/90
              px-4
              py-2
              text-xs
              font-bold
              backdrop-blur
            "
            >
              View Project →
            </span>
          </div>
        </div>

        {/* CONTENT */}

        <div className="flex h-[260px] flex-col p-7">
          <h3
            className="
            text-2xl
            font-black
            text-brand-text
            transition-colors
            duration-300
            group-hover:text-zinc-500
            line-clamp-1
          "
          >
            {title}
          </h3>

          <p
            className="
            mt-3
            text-[15px]
            leading-7
            text-brand-text/70
            line-clamp-3
            flex-1
          "
          >
            {description}
          </p>

          {/* TAGS */}

          {tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-zinc-200
                    bg-zinc-50
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                  "
                >
                  {getTechIcon(tag) && (
                    <img src={getTechIcon(tag)} alt={tag} className="h-4 w-4" />
                  )}

                  {tag}
                </span>
              ))}

              {tags.length > 3 && (
                <span
                  className="
                    rounded-full
                    border
                    border-zinc-200
                    bg-zinc-50
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                  "
                >
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* BUTTON */}

          <div className="mt-6 flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  border
                  border-zinc-300
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >
                GitHub
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
  rounded-xl
  bg-zinc-900
  px-4
  py-2
  text-sm
  font-semibold
  text-white
  transition-all
  duration-300
  hover:bg-zinc-700
  hover:-translate-y-0.5
"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
