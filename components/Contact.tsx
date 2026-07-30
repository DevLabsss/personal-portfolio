"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

interface ContactProps {
  dict: {
    title: string;
    accent: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
  };
}

export default function Contact({ dict }: ContactProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mykrbkle", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
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
        {/* ====================================== */}
        {/* HEADER */}
        {/* ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-2
            lg:items-end
            lg:gap-20
          "
        >
          {/* LEFT */}

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
                Contact / Let&apos;s Connect
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
              Get In
              <br />
              Touch<span className="text-zinc-300">.</span>
            </h2>
          </div>

          {/* RIGHT */}

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
              {dict.subtitle}
            </p>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-x-4
                gap-y-2
                lg:justify-end
              "
            >
              <span className="text-xs font-semibold text-zinc-500">
                Internship
              </span>

              <span className="text-zinc-300">•</span>

              <span className="text-xs font-semibold text-zinc-500">
                Collaboration
              </span>

              <span className="text-zinc-300">•</span>

              <span className="text-xs font-semibold text-zinc-500">
                Freelance
              </span>
            </div>
          </div>
        </motion.div>

        {/* DIVIDER */}

        <div className="mt-16 h-px w-full bg-zinc-950 md:mt-20" />

        {/* ====================================== */}
        {/* CONTACT INFORMATION */}
        {/* ====================================== */}

        <div
          className="
            grid
            grid-cols-1
            border-b
            border-zinc-200
            md:grid-cols-2
          "
        >
          {/* EMAIL */}

          <motion.a
            href="mailto:syahrilfauzi17@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              group
              flex
              items-center
              justify-between
              gap-5
              border-b
              border-zinc-200
              py-8

              md:border-b-0
              md:border-r
              md:pr-10

              lg:py-10
            "
          >
            <div className="flex items-center gap-5">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-zinc-200
                  transition-colors
                  duration-300

                  group-hover:bg-zinc-950
                  group-hover:text-white
                "
              >
                <Mail size={18} strokeWidth={1.8} />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-zinc-400
                  "
                >
                  Email
                </p>

                <p
                  className="
                    mt-1
                    text-base
                    font-bold
                    text-zinc-950
                    sm:text-lg
                  "
                >
                  syahrilfauzi17@gmail.com
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={19}
              className="
                hidden
                text-zinc-400
                transition-transform
                duration-300

                group-hover:-translate-y-1
                group-hover:translate-x-1

                sm:block
              "
            />
          </motion.a>

          {/* LOCATION */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="
              flex
              items-center
              gap-5
              py-8

              md:pl-10

              lg:py-10
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-zinc-200
              "
            >
              <MapPin size={18} strokeWidth={1.8} />
            </div>

            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-zinc-400
                "
              >
                Location
              </p>

              <p
                className="
                  mt-1
                  text-base
                  font-bold
                  text-zinc-950
                  sm:text-lg
                "
              >
                Tangerang, Indonesia
              </p>
            </div>
          </motion.div>
        </div>

        {/* ====================================== */}
        {/* FORM */}
        {/* ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            py-14
            md:py-16
          "
        >
          {/* SUCCESS STATE */}

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                flex
                min-h-[360px]
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 15,
                }}
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-zinc-950
                  text-white
                "
              >
                <CheckCircle2 size={28} />
              </motion.div>

              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  text-zinc-950
                "
              >
                Message Sent<span className="text-zinc-300">.</span>
              </h3>

              <p
                className="
                  mt-3
                  max-w-[430px]
                  text-sm
                  leading-7
                  text-zinc-500
                "
              >
                Terima kasih telah menghubungi. Saya akan segera membalas pesan
                Anda.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* NAME + EMAIL */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-10
                  md:grid-cols-2
                  md:gap-14
                "
              >
                {/* NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-zinc-400
                    "
                  >
                    {dict.name}
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={dict.namePlaceholder}
                    disabled={status === "loading"}
                    required
                    className="
                      mt-3
                      w-full
                      border-0
                      border-b
                      border-zinc-300
                      bg-transparent
                      px-0
                      py-4
                      text-lg
                      font-medium
                      text-zinc-950
                      outline-none
                      transition-colors
                      duration-300

                      placeholder:font-normal
                      placeholder:text-zinc-300

                      focus:border-zinc-950

                      disabled:opacity-50
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-zinc-400
                    "
                  >
                    {dict.email}
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={dict.emailPlaceholder}
                    disabled={status === "loading"}
                    required
                    className="
                      mt-3
                      w-full
                      border-0
                      border-b
                      border-zinc-300
                      bg-transparent
                      px-0
                      py-4
                      text-lg
                      font-medium
                      text-zinc-950
                      outline-none
                      transition-colors
                      duration-300

                      placeholder:font-normal
                      placeholder:text-zinc-300

                      focus:border-zinc-950

                      disabled:opacity-50
                    "
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-12">
                <label
                  htmlFor="message"
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-zinc-400
                  "
                >
                  {dict.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={dict.messagePlaceholder}
                  disabled={status === "loading"}
                  required
                  className="
                    mt-3
                    w-full
                    resize-none
                    border-0
                    border-b
                    border-zinc-300
                    bg-transparent
                    px-0
                    py-4
                    text-lg
                    font-medium
                    leading-7
                    text-zinc-950
                    outline-none
                    transition-colors
                    duration-300

                    placeholder:font-normal
                    placeholder:text-zinc-300

                    focus:border-zinc-950

                    disabled:opacity-50
                  "
                />
              </div>

              {/* ERROR */}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    text-red-500
                  "
                >
                  Gagal mengirim pesan. Silakan coba lagi.
                </motion.p>
              )}

              {/* FORM FOOTER */}

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-6

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p
                  className="
                    max-w-[480px]
                    text-sm
                    leading-6
                    text-zinc-400
                  "
                >
                  Have an opportunity, project, or just want to connect? Feel
                  free to send me a message.
                </p>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    group
                    inline-flex
                    min-w-[190px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-zinc-950
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-zinc-800

                    disabled:pointer-events-none
                    disabled:opacity-60
                  "
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={16} />

                      {dict.send}

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-300

                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
