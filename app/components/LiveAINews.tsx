"use client";
import {useEffect,useState} from "react";

type Article={title:string;url:string;source:string;publishedAt:string;image:string;country:string};
type Feed={articles:Article[];updatedAt:string;provider:string;live:boolean};

export default function LiveAINews({lang}:{lang:"en"|"ar"}){
 const [feed,setFeed]=useState<Feed|null>(null),[error,setError]=useState(false);
 const load=()=>fetch(`/api/ai-news?lang=${lang}`).then(r=>{if(!r.ok)throw new Error();return r.json()}).then(d=>{setFeed(d);setError(false)}).catch(()=>setError(true));
 useEffect(()=>{load();const timer=setInterval(load,15*60*1000);return()=>clearInterval(timer)},[lang]);
 const locale=lang==="ar"?"ar-JO":"en-US";
 if(!feed&&!error)return <div className="ai-loading"><i/><i/><i/><span>{lang==="ar"?"جارٍ تحميل أحدث الأخبار…":"Loading the latest AI news…"}</span></div>;
 if(error&&!feed)return <div className="ai-error">{lang==="ar"?"تعذر تحديث الأخبار الآن. حاول مرة أخرى قريباً.":"The live feed could not refresh. Please try again shortly."}</div>;
 return <>
  <div className="ai-feed-meta"><span className={feed?.live?"live":""}><i/>{feed?.live?(lang==="ar"?"مباشر عبر GDELT":"Live via GDELT"):(lang==="ar"?"نسخة احتياطية":"Fallback feed")}</span><time>{lang==="ar"?"آخر تحديث":"Updated"} {new Intl.DateTimeFormat(locale,{hour:"2-digit",minute:"2-digit"}).format(new Date(feed!.updatedAt))}</time><button onClick={load}>{lang==="ar"?"تحديث الآن ↻":"Refresh now ↻"}</button></div>
  <div className="ai-news-grid">{feed!.articles.map((a,i)=><a className={`ai-news-card ${i===0?"lead":""}`} href={a.url} target="_blank" rel="noreferrer" key={a.url}>
   <div className="ai-card-visual">{a.image?<img src={a.image} alt="" onError={e=>e.currentTarget.style.display="none"}/>:null}<span>AI / {String(i+1).padStart(2,"0")}</span></div>
   <div className="ai-card-copy"><div><b>{a.source}</b><time>{new Intl.DateTimeFormat(locale,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a.publishedAt))}</time></div><h2>{a.title}</h2><p>{a.country} <span>↗</span></p></div>
  </a>)}</div>
 </>
}
