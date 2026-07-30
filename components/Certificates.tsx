"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Award, X } from "lucide-react";

type CertificateCategory =
  | "AI"
  | "Web"
  | "Blockchain"
  | "Academic"
  | "English"
  | "Other";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: CertificateCategory;
  image: string;
  link?: string;
  featured?: boolean;
}

const certificates: Certificate[] = [
  {
    id: "blockchain-basics",
    title: "Blockchain Basics",
    issuer: "University at Buffalo / Coursera",
    year: "2025",
    category: "Blockchain",
    image: "/images/certificates/Blockchain_Basic.png",
    featured: true,
  },

  {
    id: "ai-smart-solution",
    title: "Artificial Intelligence as Smart Solution",
    issuer: "Universitas Pamulang",
    year: "2024",
    category: "AI",
    image: "/images/certificates/ai_smart_solution.png",
    featured: true,
  },

  {
    id: "web-development",
    title: "Masa Depan Web Development",
    issuer: "Universitas Pamulang",
    year: "2024",
    category: "Web",
    image: "/images/certificates/Masa_Depan_Web_Development.png",
    featured: true,
  },

  {
    id: "pkm-laras",
    title: "Community Service — CV Laras Gemilang Teknika",
    issuer: "Universitas Pamulang",
    year: "2026",
    category: "Academic",
    image: "/images/certificates/SERTIFIKAT_PKM.png",
    featured: true,
  },

  {
    id: "toefl",
    title: "TOEFL Prediction Test",
    issuer: "Universitas Pamulang",
    year: "2026",
    category: "English",
    image: "/images/certificates/toefl.jpg",
    featured: true,
  },

  {
    id: "islam-science",
    title: "Islam dan Ilmu Pengetahuan",
    issuer: "Universitas Pamulang",
    year: "2024",
    category: "Academic",
    image: "/images/certificates/Islam_dan_Ilmu_Pengetahuan.png",
    featured: true,
  },

  {
    id: "beyond-seminar",
    title: "Beyond Seminar",
    issuer: "Universitas Pamulang",
    year: "2025",
    category: "Other",
    image: "/images/certificates/SEMINAR_BEYOND.png",
  },

  {
    id: "national-seminar",
    title: "National Seminar",
    issuer: "Universitas Pamulang",
    year: "2025",
    category: "Other",
    image: "/images/certificates/SEMINAR_NASIONAL.png",
  },

  // ==============================
  // SERTIFIKAT LAIN
  // Hanya muncul ketika View All
  // ==============================

  {
    id: "kupu-excel",
    title: "Jurus Jitu Jago Microsoft Excel di Dunia Kerja",
    issuer: "KUPU",
    year: "2022",
    category: "Other",
    image: "/images/certificates/kupu-excel.jpeg",
  },

  {
    id: "kupu-english",
    title: "Bahasa Inggris untuk Wawancara Kerja",
    issuer: "KUPU",
    year: "2022",
    category: "English",
    image: "/images/certificates/kupu-english.jpeg",
  },

  {
    id: "ruangguru-winning-essay",
    title: "Tips Menulis Winning Essay untuk Beasiswa",
    issuer: "Ruangguru",
    year: "2022",
    category: "Other",
    image: "/images/certificates/ruangguru-winning-essay.jpeg",
  },
];

const categories = [
  "All",
  "AI",
  "Web",
  "Blockchain",
  "Academic",
  "English",
  "Other",
] as const;

type FilterCategory = (typeof categories)[number];

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [category, setCategory] = useState<FilterCategory>("All");

  const featuredCertificates = certificates
    .filter((certificate) => certificate.featured)
    .slice(0, 6);

  const filteredCertificates =
    category === "All"
      ? certificates
      : certificates.filter((certificate) => certificate.category === category);

  return (
    <>
      <section
        id="certificates"
        className="relative overflow-hidden py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-black/30" />

              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                Selected Achievements
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-[1fr_380px] md:items-end">
              <h2 className="text-5xl font-black tracking-[-0.05em] text-zinc-950 md:text-6xl">
                Certificates
                <span className="text-black/20">.</span>
              </h2>

              <p className="max-w-[380px] text-sm font-medium leading-7 text-black/50 md:justify-self-end md:text-right">
                Selected certifications, courses, and academic achievements from
                my learning journey.
              </p>
            </div>
          </motion.div>

          {/* FEATURED GRID */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCertificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>

          {/* VIEW ALL */}

          {certificates.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex justify-center"
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
                  py-3
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
                View All Certificates
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAll(false)}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/40
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
                relative
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

              <div className="border-b border-black/10 px-6 py-6 md:px-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-black/40">
                      <Award size={15} />

                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                        Archive
                      </span>
                    </div>

                    <h3 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">
                      All Certificates
                      <span className="text-black/20">.</span>
                    </h3>

                    <p className="mt-2 text-sm text-black/45">
                      {certificates.length} certificates in my learning archive.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowAll(false)}
                    aria-label="Close certificates"
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
                      transition
                      hover:bg-zinc-950
                      hover:text-white
                    "
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* FILTER */}

                <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
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
                            : "bg-zinc-100 text-black/55 hover:bg-zinc-200 hover:text-black"
                        }
                      `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* MODAL CONTENT */}

              <div className="overflow-y-auto p-6 md:p-8">
                <motion.div
                  layout
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredCertificates.map((certificate, index) => (
                      <CertificateCard
                        key={certificate.id}
                        certificate={certificate}
                        index={index}
                        compact
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   CERTIFICATE CARD
========================================================= */

function CertificateCard({
  certificate,
  index,
  compact = false,
}: {
  certificate: Certificate;
  index: number;
  compact?: boolean;
}) {
  const content = (
    <>
      {/* IMAGE */}

      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.03]
          "
        />

        {/* Hover overlay */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-black/0
            transition-all
            duration-300
            group-hover:bg-black/20
          "
        >
          {certificate.link && (
            <div
              className="
                flex
                h-11
                w-11
                translate-y-2
                items-center
                justify-center
                rounded-full
                bg-white
                opacity-0
                shadow-lg
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <ArrowUpRight size={18} />
            </div>
          )}
        </div>

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
            text-black/60
            shadow-sm
            backdrop-blur-md
          "
        >
          {certificate.category}
        </span>
      </div>

      {/* CONTENT */}

      <div className={compact ? "p-5" : "p-6"}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              className="
                line-clamp-2
                text-lg
                font-black
                leading-snug
                tracking-[-0.02em]
                text-zinc-950
              "
            >
              {certificate.title}
            </h3>

            <p className="mt-2 line-clamp-1 text-xs font-medium text-black/45">
              {certificate.issuer}
            </p>
          </div>

          <span className="shrink-0 font-mono text-[10px] font-bold text-black/30">
            {certificate.year}
          </span>
        </div>
      </div>
    </>
  );

  const className = `
    group
    overflow-hidden
    rounded-[24px]
    border
    border-black/10
    bg-white
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-black/20
    hover:shadow-xl
  `;

  if (certificate.link) {
    return (
      <motion.a
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: Math.min(index * 0.05, 0.3),
        }}
        href={certificate.link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.3),
      }}
      className={className}
    >
      {content}
    </motion.div>
  );
}
