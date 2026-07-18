import type { Metadata } from "next";
import ResearchHub from "../components/ResearchHub";

export const metadata: Metadata = {
  title: "Research Desk — Worldline",
  description: "Source-backed dossiers on Palestine, Sudan, African hunger, Trump and Netanyahu from an Arab and Palestinian perspective.",
};

export default function ResearchPage() {
  return <ResearchHub lang="en" />;
}
