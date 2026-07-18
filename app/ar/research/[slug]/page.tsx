import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResearchArticle from "../../../components/ResearchArticle";
import { getResearch, researchByLang } from "../../../../data/research";

export function generateStaticParams() {
  return researchByLang.ar.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dossier = getResearch("ar", slug);
  return dossier ? { title: `${dossier.title} — أبحاث وورلدلاين`, description: dossier.subtitle } : {};
}

export default async function ArabicResearchDossierPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dossier = getResearch("ar", slug);
  if (!dossier) notFound();
  return <ResearchArticle dossier={dossier} lang="ar" />;
}
