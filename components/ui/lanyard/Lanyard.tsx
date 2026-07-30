"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Rope from "./Rope";
import Badge from "./Badge";

export default function Lanyard() {
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Drag offset drives a subtle tilt on the whole assembly and a stretch
  // on the strap, so it reads as a physical object rather than a toggle.
  const rotate = useTransform(x, [-130, 0, 130], [-16, 0, 16]);
  const strapScaleY = useTransform(y, [0, 180], [1, 1.15]);

  return (
    <div
      ref={constraintsRef}
      className="relative flex w-full max-w-[420px] min-h-[840px] items-start justify-center overflow-visible"
    >
      {/* Fixed anchor clip */}
      <Rope />

      {/* Draggable strap + hook + badge.
          NOTE: this used to be `position: absolute` with no `left` set,
          which left its horizontal position up to the browser's default
          static-position algorithm instead of the parent's `justify-center`
          (flex alignment doesn't apply to absolutely positioned children).
          That's what caused the "lanyard doesn't stay centered" bug.
          Keeping it in normal flow lets the parent's flex `justify-center`
          center it reliably, while `mt-[52px]` reproduces the same vertical
          offset the old `top-[52px]` gave it. */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.15}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 340, bounceDamping: 16 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ x, y, rotate, transformOrigin: "top center" }}
        whileDrag={{ scale: 1.03 }}
        animate={!isDragging ? { rotate: [-2, 2, -2] } : undefined}
        transition={
          !isDragging
            ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
        className={`relative z-20 mt-[52px] flex flex-col items-center touch-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* Strap */}
        <motion.div
          style={{ scaleY: strapScaleY, transformOrigin: "top center" }}
          className="relative h-20 w-10 overflow-hidden rounded-b-xl bg-zinc-950 shadow-lg"
        >
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
          <p className="absolute left-1/2 top-8 -translate-x-1/2 rotate-90 whitespace-nowrap text-[8px] font-bold tracking-[0.45em] text-white/50">
            DEVLABSS
          </p>
        </motion.div>

        {/* Metal Hook */}
        <div className="flex h-8 w-7 items-center justify-center rounded-b-lg bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-700 shadow-md">
          <div className="h-5 w-[2px] rounded-full bg-zinc-50" />
        </div>

        {/* Connector — widened from 2px to 8px (w-2) so it's the same
            width as the badge's own hook-slot peg below. At 2px it read
            as a thin wire meeting a chunky 8px peg with an 8px negative
            margin hiding the seam behind the badge's rounded corner —
            that mismatch was the "disconnected" look. Same width + zero
            gap now makes it read as one continuous pin. */}
        <div className="h-3 w-2 rounded-t-sm bg-zinc-500" />

        <Badge />
      </motion.div>
    </div>
  );
}
