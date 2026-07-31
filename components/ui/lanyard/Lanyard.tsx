"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import Rope from "./Rope";
import Badge from "./Badge";

export default function Lanyard() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Gerakan horizontal memberikan efek miring.
  const rotate = useTransform(x, [-130, 0, 130], [-16, 0, 16]);

  // Gerakan vertikal sedikit meregangkan strap.
  const strapScaleY = useTransform(y, [0, 180], [1, 1.15]);

  return (
    <div
      ref={constraintsRef}
      className="
        relative
        flex
        w-full
        max-w-[320px]
        min-h-[500px]
        items-start
        justify-center
        overflow-visible

        sm:max-w-[360px]
        sm:min-h-[560px]

        lg:max-w-[420px]
        lg:min-h-[840px]
      "
    >
      {/* Anchor / Rope */}
      <Rope />

      {/* Lanyard */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.15}
        dragSnapToOrigin
        dragTransition={{
          bounceStiffness: 340,
          bounceDamping: 16,
        }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{
          x,
          y,
          rotate,
          transformOrigin: "top center",
        }}
        whileDrag={{
          scale: 1.03,
        }}
        animate={
          !isDragging
            ? {
                rotate: [-2, 2, -2],
              }
            : undefined
        }
        transition={
          !isDragging
            ? {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={`
          relative
          z-20
          mt-[36px]
          flex
          origin-top
          scale-[0.78]
          flex-col
          items-center
          touch-none

          sm:mt-[42px]
          sm:scale-[0.88]

          lg:mt-[52px]
          lg:scale-100

          ${isDragging ? "cursor-grabbing" : "cursor-grab"}
        `}
      >
        {/* Strap */}
        <motion.div
          style={{
            scaleY: strapScaleY,
            transformOrigin: "top center",
          }}
          className="
            relative
            h-20
            w-10
            overflow-hidden
            rounded-b-xl
            bg-zinc-950
            shadow-lg
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-px
              -translate-x-1/2
              bg-white/10
            "
          />

          <p
            className="
              absolute
              left-1/2
              top-8
              -translate-x-1/2
              rotate-90
              whitespace-nowrap
              text-[8px]
              font-bold
              tracking-[0.45em]
              text-white/50
            "
          >
            DEVLABSS
          </p>
        </motion.div>

        {/* Metal Hook */}
        <div
          className="
            flex
            h-8
            w-7
            items-center
            justify-center
            rounded-b-lg
            bg-gradient-to-b
            from-zinc-200
            via-zinc-400
            to-zinc-700
            shadow-md
          "
        >
          <div className="h-5 w-[2px] rounded-full bg-zinc-50" />
        </div>

        {/* Connector */}
        <div className="h-3 w-2 rounded-t-sm bg-zinc-500" />

        {/* Badge */}
        <Badge />
      </motion.div>
    </div>
  );
}
