"use client";

import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

interface GithubData {
  repositories: {
    totalCount: number;
  };
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
    };
  };
}

interface StatItemProps {
  value: number;
  title: string;
  suffix?: string;
  delay?: number;
}

function StatItem({ value, title, suffix = "", delay = 0 }: StatItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        min-h-[120px]
        flex-col
        items-center
        justify-center
        px-5
        py-7

        md:min-h-[140px]
        md:px-8
        md:py-8
      "
    >
      {/* NUMBER */}
      <div
        className="
          text-[46px]
          font-black
          leading-none
          tracking-[-0.06em]
          text-zinc-950

          transition-transform
          duration-300

          group-hover:-translate-y-1

          sm:text-[52px]
          lg:text-[60px]
        "
      >
        {isInView ? (
          <CountUp
            start={0}
            end={value}
            duration={1.8}
            delay={delay}
            suffix={suffix}
          />
        ) : (
          <>0{suffix}</>
        )}
      </div>

      {/* LABEL */}
      <p
        className="
          mt-4
          text-center
          text-[10px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-zinc-400

          sm:text-[11px]
        "
      >
        {title}
      </p>

      {/* SMALL HOVER LINE */}
      <span
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-zinc-950

          transition-all
          duration-500

          group-hover:w-10
        "
      />
    </motion.div>
  );
}

export default function GithubStats() {
  const [github, setGithub] = useState<GithubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadGithubData() {
      try {
        const res = await fetch("/api/github");

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }

        const data: GithubData = await res.json();

        setGithub(data);
      } catch (err) {
        console.error("Failed to load GitHub stats:", err);
        setError(true);
      }
    }

    loadGithubData();
  }, []);

  // LOADING
  if (!github && !error) {
    return (
      <div className="mt-8">
        {/* Calendar Skeleton */}
        <div
          className="
            mx-auto
            h-[120px]
            w-full
            max-w-4xl
            animate-pulse
            rounded-2xl
            bg-zinc-100
          "
        />

        {/* Stats Skeleton */}
        <div
          className="
            mx-auto
            mt-10
            grid
            max-w-5xl
            grid-cols-1

            divide-y
            divide-zinc-200

            border-y
            border-zinc-200

            sm:grid-cols-3
            sm:divide-x
            sm:divide-y-0
          "
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                flex
                min-h-[120px]
                items-center
                justify-center
                px-8
                py-7

                md:min-h-[140px]
              "
            >
              <div className="w-full max-w-[150px]">
                <div className="mx-auto h-12 w-24 animate-pulse rounded-lg bg-zinc-100" />

                <div className="mx-auto mt-4 h-3 w-28 animate-pulse rounded bg-zinc-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ERROR
  if (error || !github) {
    return (
      <div className="mt-8 text-center text-sm text-zinc-400">
        Unable to load GitHub statistics.
      </div>
    );
  }

  const totalRepositories = github.repositories.totalCount;

  const totalContributions =
    github.contributionsCollection.contributionCalendar.totalContributions;

  return (
    <div className="mt-8">
      {/* =========================
          GITHUB CALENDAR
      ========================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          flex
          justify-center
          overflow-x-auto
          pb-3
        "
      >
        <GitHubCalendar
          username="DevLabsss"
          blockSize={12}
          blockMargin={4}
          fontSize={13}
          colorScheme="light"
        />
      </motion.div>

      {/* =========================
          STATISTICS
      ========================== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="
          mx-auto
          mt-10
          grid
          w-full
          max-w-5xl
          grid-cols-1

          divide-y
          divide-zinc-200

          border-y
          border-zinc-200

          sm:grid-cols-3
          sm:divide-x
          sm:divide-y-0
        "
      >
        <StatItem value={totalRepositories} title="Repositories" delay={0} />

        <StatItem
          value={totalContributions}
          title="Contributions"
          delay={0.1}
        />

        <StatItem value={2} suffix="+" title="Years Active" delay={0.2} />
      </motion.div>
    </div>
  );
}
