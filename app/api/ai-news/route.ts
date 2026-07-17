import { NextRequest, NextResponse } from "next/server";

export const runtime="nodejs";

type RawArticle={url?:string;title?:string;seendate?:string;socialimage?:string;domain?:string;sourcecountry?:string;language?:string};
const fallback={
 en:[
  {title:"Latest artificial intelligence coverage",url:"https://www.reuters.com/technology/artificial-intelligence/",source:"Reuters",publishedAt:"2026-07-17T12:00:00Z",image:"",country:"Global"},
  {title:"Anthropic’s latest research and product announcements",url:"https://www.anthropic.com/news",source:"Anthropic",publishedAt:"2026-07-17T10:00:00Z",image:"",country:"United States"},
  {title:"Google AI: new models, research and tools",url:"https://ai.google/",source:"Google AI",publishedAt:"2026-07-17T09:00:00Z",image:"",country:"United States"}
 ],
 ar:[
  {title:"أحدث تغطية لأخبار الذكاء الاصطناعي",url:"https://www.reuters.com/technology/artificial-intelligence/",source:"Reuters",publishedAt:"2026-07-17T12:00:00Z",image:"",country:"عالمي"},
  {title:"أحدث أبحاث وإعلانات أنثروبيك",url:"https://www.anthropic.com/news",source:"Anthropic",publishedAt:"2026-07-17T10:00:00Z",image:"",country:"الولايات المتحدة"},
  {title:"Google AI: نماذج وأبحاث وأدوات جديدة",url:"https://ai.google/",source:"Google AI",publishedAt:"2026-07-17T09:00:00Z",image:"",country:"الولايات المتحدة"}
 ]
};

function iso(value=""){
 const m=value.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/);
 return m?`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}Z`:value||new Date().toISOString();
}

function decodeXml(value=""){
 return value.replace(/^<!\[CDATA\[|\]\]>$/g,"").replace(/<[^>]+>/g,"").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim();
}
function tag(block:string,name:string){return decodeXml(block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`,"i"))?.[1]||"")}
async function rssFeed(lang:"en"|"ar"){
 const endpoint=new URL("https://news.google.com/rss/search");
 endpoint.searchParams.set("q",lang==="ar"?"الذكاء الاصطناعي when:7d":"artificial intelligence OR generative AI when:7d");
 endpoint.searchParams.set("hl",lang==="ar"?"ar":"en-US");endpoint.searchParams.set("gl",lang==="ar"?"JO":"US");endpoint.searchParams.set("ceid",lang==="ar"?"JO:ar":"US:en");
 const response=await fetch(endpoint,{headers:{"User-Agent":"Mozilla/5.0 WorldlineNews/1.0"},next:{revalidate:900}});if(!response.ok)throw new Error(`RSS ${response.status}`);
 const xml=await response.text();const items=Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)).map(m=>m[1]);const seen=new Set<string>();
 const articles=items.map(item=>{const title=tag(item,"title"),url=tag(item,"link"),source=tag(item,"source")||"Google News",date=tag(item,"pubDate");return {title,url,source,publishedAt:date?new Date(date).toISOString():new Date().toISOString(),image:"",country:lang==="ar"?"عالمي":"Global"}}).filter(a=>a.title&&a.url).filter(a=>{const key=a.title.toLowerCase().replace(/\W/g,"").slice(0,90);if(seen.has(key))return false;seen.add(key);return true}).slice(0,18);
 if(!articles.length)throw new Error("Empty RSS feed");return articles;
}

export async function GET(request:NextRequest){
 const lang=request.nextUrl.searchParams.get("lang")==="ar"?"ar":"en";
 try{
  const query=lang==="ar"?'("artificial intelligence" OR "generative AI") sourcelang:arabic':'("artificial intelligence" OR "generative AI" OR OpenAI OR Anthropic OR Gemini) sourcelang:english';
  const endpoint=new URL("https://api.gdeltproject.org/api/v2/doc/doc");
  endpoint.searchParams.set("query",query);endpoint.searchParams.set("mode","artlist");endpoint.searchParams.set("maxrecords","30");endpoint.searchParams.set("format","json");endpoint.searchParams.set("sort","datedesc");endpoint.searchParams.set("timespan","7d");
  const response=await fetch(endpoint,{headers:{"User-Agent":"Worldline-AI-News/1.0"},next:{revalidate:900}});
  if(!response.ok)throw new Error(`GDELT ${response.status}`);
  const data=await response.json() as {articles?:RawArticle[]};const seen=new Set<string>();
  const articles=(data.articles||[]).filter(a=>a.url&&a.title&&a.title.length>20).filter(a=>{const key=a.title!.toLowerCase().replace(/\W/g,"").slice(0,90);if(seen.has(key))return false;seen.add(key);return true}).slice(0,18).map(a=>({title:a.title!,url:a.url!,source:a.domain||new URL(a.url!).hostname.replace(/^www\./,""),publishedAt:iso(a.seendate),image:a.socialimage||"",country:a.sourcecountry||"Global"}));
  if(!articles.length)throw new Error("No current articles");
  return NextResponse.json({articles,updatedAt:new Date().toISOString(),provider:"GDELT",live:true},{headers:{"Cache-Control":"public, s-maxage=900, stale-while-revalidate=3600"}});
 }catch{
  try{
   const articles=await rssFeed(lang);
   return NextResponse.json({articles,updatedAt:new Date().toISOString(),provider:"Google News RSS",live:true},{headers:{"Cache-Control":"public, s-maxage=900, stale-while-revalidate=3600"}});
  }catch{
   return NextResponse.json({articles:fallback[lang],updatedAt:new Date().toISOString(),provider:"Curated fallback",live:false},{headers:{"Cache-Control":"public, s-maxage=300, stale-while-revalidate=1800"}});
  }
 }
}
