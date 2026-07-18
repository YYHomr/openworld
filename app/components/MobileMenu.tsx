"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menu = {
  en:[
    {title:"Start",links:[["Home","/"],["Latest stories","/#latest"],["News by date","/date"],["AI news","/ai"]]},
    {title:"Stories",links:[["Kids stories","/kids"],["Palestine","/palestine"],["Gaza","/gaza"],["The true story","/palestine/the-true-story"]]},
    {title:"Research",links:[["Research desk","/research"],["Palestine dossier","/research/palestine"],["Sudan dossier","/research/sudan"],["African hunger","/research/african-hunger"]]},
    {title:"Take action",links:[["WLB boycott scanner","/wlb"],["About Worldline","/about"]]}
  ],
  ar:[
    {title:"البداية",links:[["الرئيسية","/ar"],["أحدث القصص","/ar#latest"],["الأخبار حسب التاريخ","/ar/date"],["أخبار الذكاء الاصطناعي","/ar/ai"]]},
    {title:"حكايات",links:[["قصص الأطفال","/ar/kids"],["فلسطين","/ar/palestine"],["غزة","/ar/gaza"],["القصة الحقيقية","/ar/palestine/the-true-story"]]},
    {title:"الأبحاث",links:[["مكتب الأبحاث","/ar/research"],["ملف فلسطين","/ar/research/palestine"],["ملف السودان","/ar/research/sudan"],["الجوع في أفريقيا","/ar/research/african-hunger"]]},
    {title:"شارك",links:[["ماسح المقاطعة WLB","/ar/wlb"],["عن وورلدلاين","/ar/about"]]}
  ]
} as const;

export default function MobileMenu(){
  const path=usePathname(); const ar=path==="/ar"||path.startsWith("/ar/"); const lang=ar?"ar":"en";
  const [open,setOpen]=useState(false);
  useEffect(()=>setOpen(false),[path]);
  useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  useEffect(()=>{const close=(e:KeyboardEvent)=>e.key==="Escape"&&setOpen(false);window.addEventListener("keydown",close);return()=>window.removeEventListener("keydown",close)},[]);
  return <>
    <button className={`mobile-menu-trigger ${open?"is-open":""}`} onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="worldline-menu" aria-label={ar?(open?"إغلاق القائمة":"فتح القائمة"):(open?"Close menu":"Open menu")}><i/><i/><span>{ar?"القائمة":"MENU"}</span></button>
    <div id="worldline-menu" className={`mobile-menu-overlay ${open?"is-open":""}`} aria-hidden={!open} dir={ar?"rtl":"ltr"} lang={lang}>
      <div className="mobile-menu-top"><a className="brand" href={ar?"/ar":"/"}>WORLD<span>LINE</span><i/></a><b>{ar?"خريطة الموقع":"SITE TREE"}</b></div>
      <div className="mobile-menu-tree">
        <div className="tree-root"><span>WORLDLINE</span><small>{ar?"اختر طريقك":"Choose your path"}</small></div>
        {menu[lang].map((branch,index)=><section className="tree-branch" key={branch.title}><header><span>{String(index+1).padStart(2,"0")}</span><h2>{branch.title}</h2></header><div>{branch.links.map(([label,href])=><a href={href} key={href}><i/><span>{label}</span><b>↗</b></a>)}</div></section>)}
      </div>
      <div className="mobile-menu-foot"><p>{ar?"صحافة وذاكرة وفعل سلمي.":"Journalism, memory and peaceful action."}</p><a href={ar?path.replace(/^\/ar/,"")||"/":`/ar${path==="/"?"":path}`}>{ar?"ENGLISH":"العربية"} ↗</a></div>
    </div>
  </>;
}
