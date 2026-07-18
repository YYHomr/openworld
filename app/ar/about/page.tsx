import type { Metadata } from "next";
import AboutPage from "../../components/AboutPage";
export const metadata: Metadata = { title: "عن VOAI — وورلدلاين", description: "تعرّف إلى VOAI، الصانع الرقمي المستقل وراء وورلدلاين." };
export default function ArabicAbout(){ return <AboutPage lang="ar"/>; }
