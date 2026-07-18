import type { Metadata } from "next";
import AboutPage from "../components/AboutPage";
export const metadata: Metadata = { title: "About VOAI — Worldline", description: "Meet VOAI, the independent digital creator behind Worldline." };
export default function About(){ return <AboutPage lang="en"/>; }
