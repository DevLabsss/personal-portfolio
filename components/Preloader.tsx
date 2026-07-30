"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const steps = [
  { text: "Think", step: "01" },
  { text: "Imagine", step: "02" },
  { text: "Design", step: "03" },
  { text: "Build", step: "04" },
  { text: "Debug", step: "05" },
  { text: "Improve", step: "06" },
  { text: "Deploy", step: "07" },
  { text: "Welcome", step: "08" },
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const current = steps[index];

  const progress = Math.round(((index + 1) / steps.length) * 100);

  // Pergantian kata
  useEffect(() => {
    // Step terakhir: Welcome
    if (index === steps.length - 1) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 900);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 320);

    return () => clearTimeout(timeout);
  }, [index]);

  // Disable scroll selama preloader aktif
  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-zinc-950
            text-white
          "
        >
          {/* ============================= */}
          {/* TOP */}
          {/* ============================= */}

          <div
            className="
              absolute
              left-6
              right-6
              top-6
              flex
              items-center
              justify-between

              md:left-10
              md:right-10
              md:top-8
            "
          >
            {/* Logo / Initial */}
            <span
              className="
                text-sm
                font-bold
                tracking-tight
              "
            >
              ASF.
            </span>

            {/* Step Counter */}
            <span
              className="
                font-mono
                text-xs
                text-white/40
              "
            >
              {String(index + 1).padStart(2, "0")}
              {" / "}
              {String(steps.length).padStart(2, "0")}
            </span>
          </div>

          {/* ============================= */}
          {/* CENTER CONTENT */}
          {/* ============================= */}

          <div
            className="
              relative
              flex
              h-40
              items-center
              justify-center
              px-6
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.text}
                initial={{
                  opacity: 0,
                  filter: "blur(14px)",
                  scale: 0.92,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  filter: "blur(14px)",
                  scale: 1.08,
                  y: -8,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="text-center"
              >
                {/* Main Word */}

                <p
                  className="
                    text-5xl
                    font-black
                    tracking-[-0.05em]

                    sm:text-6xl

                    md:text-8xl
                  "
                >
                  {current.text}

                  <span className="text-white/30">.</span>
                </p>

                {/* Step Number */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.08,
                    duration: 0.2,
                  }}
                  className="
                    mt-4
                    font-mono
                    text-xs
                    tracking-[0.3em]
                    text-white/30
                  "
                >
                  STEP {current.step}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ============================= */}
          {/* BOTTOM */}
          {/* ============================= */}

          <div
            className="
              absolute
              bottom-7
              left-6
              right-6

              md:bottom-10
              md:left-10
              md:right-10
            "
          >
            {/* Progress Information */}

            <div
              className="
                mb-3
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/30
                "
              >
                Loading Portfolio
              </span>

              <span
                className="
                  font-mono
                  text-xs
                  text-white/50
                "
              >
                {progress}%
              </span>
            </div>

            {/* Progress Bar */}

            <div
              className="
                h-px
                w-full
                overflow-hidden
                bg-white/10
              "
            >
              <motion.div
                initial={false}
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="
                  h-full
                  bg-white
                "
              />
            </div>
          </div>

          {/* ============================= */}
          {/* DECORATION */}
          {/* ============================= */}

          {/* Top Center Line */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              absolute
              left-1/2
              top-0
              h-16
              w-px
              origin-top
              bg-white/10
            "
          />

          {/* Bottom Center Line */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              absolute
              bottom-0
              left-1/2
              h-16
              w-px
              origin-bottom
              bg-white/10
            "
          />

          {/* Left Decorative Dot */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
              absolute
              left-6
              top-1/2
              h-1
              w-1
              rounded-full
              bg-white/30

              md:left-10
            "
          />

          {/* Right Decorative Dot */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
              absolute
              right-6
              top-1/2
              h-1
              w-1
              rounded-full
              bg-white/30

              md:right-10
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
