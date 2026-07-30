import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { getDictionary, type Locale } from "@/lib/dictionary";
import { getGithubProjects } from "@/lib/github";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const dict = await getDictionary(locale as Locale);
  const projects = await getGithubProjects();

  const validProjects = projects.filter(
    (project): project is NonNullable<typeof project> => project !== null,
  );

  return (
    <>
      <main>
        <Hero dict={dict.hero} />

        <About dict={dict.about} />

        <Skills dict={dict.skills} />

        <Experience dict={dict.experience} />

        <Certificates />

        <Projects projects={validProjects} />

        <Contact dict={dict.contact} />
      </main>

      <Footer />
    </>
  );
}
