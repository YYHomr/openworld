import type { Metadata } from "next";
import ResearchHub from "../../components/ResearchHub";

export const metadata: Metadata = {
  title: "مكتب الأبحاث — وورلدلاين",
  description: "ملفات موثقة عن فلسطين والسودان والجوع في أفريقيا وترامب ونتنياهو من منظور عربي فلسطيني.",
};

export default function ArabicResearchPage() {
  return <ResearchHub lang="ar" />;
}
