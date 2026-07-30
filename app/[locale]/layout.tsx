import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ClientEffects from "@/components/effects/ClientEffects";
import { getDictionary, type Locale } from "@/lib/dictionary";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: "Achmad Syahril Fauzi | Portfolio",
    description: dict.hero.tagline,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Preloader />
      <ClientEffects />
      <Navbar locale={locale as Locale} />
      {children}
    </>
  );
}
