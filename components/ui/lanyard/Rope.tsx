"use client";

// Fixed anchor point — this stays put while the strap+badge below is
// dragged. Represents the clip/rail the lanyard hangs from.
export default function Rope() {
  return (
    <div className="absolute left-1/2 top-0 z-40 flex -translate-x-1/2 flex-col items-center">
      <div className="h-3 w-24 rounded-full bg-zinc-800/80 shadow-md" />
      <div className="-mt-1 h-14 w-14 rounded-full border-[6px] border-zinc-700 bg-white shadow-lg" />
    </div>
  );
}
