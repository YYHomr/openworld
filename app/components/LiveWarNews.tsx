"use client";
import {useCallback,useEffect,useState} from "react";

type Article={title:string;url:string;source:string;publishedAt:string;image:string;country:string};
type Feed={articles:Article[];updatedAt:string;provider:string;live:boolean};

export default function LiveWarNews({lang}:{lang:"en"|"ar"}){
 const [feed,setFeed]=useState<Feed|null>(null),[error,setError]=useState(false),[busy,setBusy]=useState(false);
 const load=useCallback(()=>{setBusy(true);fetch(`/api/war-news?lang=${lang}`).then(r=>{if(!r.ok)throw new Error();return r.json()}).then(d=>{setFeed(d);setError(false)}).catch(()=>setError(true)).finally(()=>setBusy(false))},[lang]);
 useEffect(()=>{load();const timer=setInterval(load,5*60*1000);return()=>clearInterval(timer)},[load]);
 const locale=lang==="ar"?"ar-JO":"en-US";
 if(!feed&&!error)return <div className="war-loading"><i/><i/><i/><span>{lang==="ar"?"جارٍ تحميل آخر تطورات الحرب…":"Loading the latest war updates…"}</span></div>;
 if(error&&!feed)return <div className="war-error">{lang==="ar"?"تعذر تحديث الأخبار الآن. حاول مجدداً قريباً.":"The live feed could not refresh. Try again shortly."}</div>;
 return <>
  <div className="war-feed-meta"><span className={feed?.live?"live":""}><i/>{feed?.live?(lang==="ar"?"تغذية مباشرة":"Live source feed"):(lang==="ar"?"نسخة موثقة احتياطية":"Verified fallback")}</span><time>{lang==="ar"?"آخر تحديث":"Updated"} {new Intl.DateTimeFormat(locale,{hour:"2-digit",minute:"2-digit"}).format(new Date(feed!.updatedAt))}</time><button disabled={busy} onClick={load}>{busy?(lang==="ar"?"يُحدّث…":"Refreshing…"):(lang==="ar"?"حدّث الآن ↻":"Refresh now ↻")}</button></div>
  <div className="war-news-list">{feed!.articles.map((a,i)=><a href={a.url} target="_blank" rel="noreferrer" key={`${a.url}-${i}`}>
   <span>{String(i+1).padStart(2,"0")}</span><div><b>{a.source} · {a.country}</b><h2>{a.title}</h2><time>{new Intl.DateTimeFormat(locale,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a.publishedAt))}</time></div><i>↗</i>
  </a>)}</div>
 </>;
}
