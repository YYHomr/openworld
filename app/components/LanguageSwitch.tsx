"use client";

import { usePathname } from "next/navigation";

export default function LanguageSwitch(){
  const pathname=usePathname()||"/";
  const arabic=pathname==="/ar"||pathname.startsWith("/ar/");
  const englishPath=arabic?(pathname.slice(3)||"/"):pathname;
  const arabicPath=arabic?pathname:(pathname==="/"?"/ar":`/ar${pathname}`);
  return <nav className="language-switch" aria-label="Language switcher">
    <a href={englishPath} className={!arabic?"current":""} lang="en" hrefLang="en" aria-current={!arabic?"page":undefined}>EN</a>
    <span aria-hidden="true"/>
    <a href={arabicPath} className={arabic?"current":""} lang="ar" hrefLang="ar" dir="rtl" aria-current={arabic?"page":undefined}>عربي</a>
  </nav>
}
