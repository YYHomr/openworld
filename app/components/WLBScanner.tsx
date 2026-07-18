"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Lang = "en" | "ar";
type ScanResult = {
  barcode:string; status:"boycott"|"pressure"|"review"|"not_listed"; found:boolean;
  product:{name:string|null;brands:string|null;image:string|null;quantity:string|null;categories:string|null;countries:string|null;origins:string|null;manufacturingPlaces:string|null;nutriscore:string|null;ecoscore:string|null};
  source:{name:string;url:string}|null;
  match:{name:string;parent?:string;levelLabel:string;reason:{en:string;ar:string};note?:{en:string;ar:string};sources:{label:string;url:string}[]}|null;
  gs1:{prefix:string;organization:string|null;isIsraeliPrefix:boolean}; explicitIsrael:boolean; disclaimer:string;
};

declare global {
  interface Window { BarcodeDetector?: new (options?: {formats?:string[]}) => {detect(source:ImageBitmapSource):Promise<Array<{rawValue:string}>>}; }
}

const copy = {
  en:{manual:"Enter a barcode",scan:"Scan with camera",stop:"Stop camera",lookup:"Check product",working:"Checking open product databases…",camera:"Point the camera at an EAN or UPC barcode",unsupported:"Live scanning is not supported by this browser. Type the barcode instead.",permission:"Camera access failed. Check permission or use manual entry.",again:"Check another",found:"Product details found",missing:"No online product record found",brand:"Brand",countries:"Markets / countries listed",origin:"Origin data",made:"Manufacturing places",gs1:"GS1 allocation",source:"Open product record",error:"We could not check that barcode.",empty:"Enter an 8–14 digit barcode.",statuses:{boycott:"BOYCOTT LISTED",pressure:"PRESSURE TARGET",review:"REVIEW THIS ITEM",not_listed:"NO WLB MATCH FOUND"},descriptions:{boycott:"The detected brand matches WLB’s evidence-backed boycott directory.",pressure:"This brand is listed as a campaign or pressure target, a different category from a priority consumer boycott.",review:"No listed brand matched, but the available origin or GS1 allocation data deserves a closer look.",not_listed:"No match was found in WLB’s current directory. This is not a guarantee that the company has no relevant ties."}},
  ar:{manual:"أدخل رقم الباركود",scan:"امسح بالكاميرا",stop:"أوقف الكاميرا",lookup:"افحص المنتج",working:"نبحث في قواعد بيانات المنتجات المفتوحة…",camera:"وجّه الكاميرا إلى باركود EAN أو UPC",unsupported:"المسح المباشر غير مدعوم في هذا المتصفح. أدخل الرقم يدوياً.",permission:"تعذر تشغيل الكاميرا. تحقق من الإذن أو استخدم الإدخال اليدوي.",again:"افحص منتجاً آخر",found:"عُثر على معلومات المنتج",missing:"لا يوجد سجل مفتوح لهذا المنتج",brand:"العلامة",countries:"الأسواق / البلدان المذكورة",origin:"بيانات المنشأ",made:"أماكن التصنيع",gs1:"تخصيص GS1",source:"سجل المنتج المفتوح",error:"تعذر فحص هذا الباركود.",empty:"أدخل باركوداً من 8 إلى 14 رقماً.",statuses:{boycott:"مُدرج للمقاطعة",pressure:"هدف ضغط",review:"راجع هذا المنتج",not_listed:"لا تطابق في قائمة WLB"},descriptions:{boycott:"العلامة المكتشفة تطابق دليلاً موثقاً في قائمة WLB.",pressure:"هذه العلامة هدف حملة أو ضغط، وهي فئة مختلفة عن المقاطعة الاستهلاكية ذات الأولوية.",review:"لا تطابق مع علامة مدرجة، لكن بيانات المنشأ أو تخصيص GS1 المتاحة تستحق التحقق.",not_listed:"لم نجد تطابقاً في دليل WLB الحالي. لا يعني ذلك ضمان عدم وجود صلات ذات صلة."}}
};

export default function WLBScanner({lang}:{lang:Lang}) {
  const t=copy[lang];
  const [barcode,setBarcode]=useState(""); const [result,setResult]=useState<ScanResult|null>(null);
  const [loading,setLoading]=useState(false); const [scanning,setScanning]=useState(false); const [message,setMessage]=useState("");
  const videoRef=useRef<HTMLVideoElement>(null); const streamRef=useRef<MediaStream|null>(null); const rafRef=useRef<number|null>(null);

  function stopCamera(){if(rafRef.current) cancelAnimationFrame(rafRef.current); rafRef.current=null; streamRef.current?.getTracks().forEach(track=>track.stop()); streamRef.current=null; setScanning(false);}
  useEffect(()=>()=>stopCamera(),[]);

  async function lookup(value=barcode){const clean=value.replace(/\D/g,""); if(clean.length<8||clean.length>14){setMessage(t.empty);return;} stopCamera(); setBarcode(clean);setLoading(true);setMessage("");setResult(null);try{const r=await fetch(`/api/wlb-product?barcode=${clean}&lang=${lang}`);const j=await r.json();if(!r.ok)throw new Error(j.error);setResult(j);}catch(e){setMessage(e instanceof Error?e.message:t.error);}finally{setLoading(false);}}
  async function submit(e:FormEvent){e.preventDefault();await lookup();}
  async function startCamera(){setMessage("");if(!window.BarcodeDetector){setMessage(t.unsupported);return;}try{const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:false});streamRef.current=stream;if(videoRef.current){videoRef.current.srcObject=stream;await videoRef.current.play();}setScanning(true);const detector=new window.BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128"]});let busy=false;const detect=async()=>{const video=videoRef.current;if(!video||!streamRef.current)return;if(video.readyState>=2&&!busy){busy=true;try{const hits=await detector.detect(video);const value=hits[0]?.rawValue?.replace(/\D/g,"");if(value&&value.length>=8){await lookup(value);return;}}catch{}finally{busy=false;}}rafRef.current=requestAnimationFrame(detect);};detect();}catch{stopCamera();setMessage(t.permission);}}

  return <div className="wlb-scanner">
    <div className="scanner-head"><span>EAN / UPC</span><b>{lang==="ar"?"ماسح WLB":"WLB SCANNER"}</b></div>
    <form onSubmit={submit} className="barcode-form"><input inputMode="numeric" autoComplete="off" value={barcode} onChange={e=>setBarcode(e.target.value.replace(/\D/g,""))} placeholder={t.manual} aria-label={t.manual}/><button disabled={loading}>{loading?t.working:t.lookup} <span>↗</span></button></form>
    <div className={`camera-frame ${scanning?"active":""}`}><video ref={videoRef} muted playsInline/><i/><p>{t.camera}</p></div>
    <button className="camera-button" type="button" onClick={scanning?stopCamera:startCamera}>{scanning?t.stop:t.scan} <span aria-hidden="true">▣</span></button>
    {message&&<p className="scanner-message" role="alert">{message}</p>}
    {loading&&<div className="scanner-loading"><i/><span>{t.working}</span></div>}
    {result&&<article className={`scan-result ${result.status}`}>
      <div className="result-status"><span>{t.statuses[result.status]}</span><h2>{result.product.name||result.match?.name||result.barcode}</h2><p>{t.descriptions[result.status]}</p></div>
      <div className="result-product">
        {result.product.image?<img src={result.product.image} alt=""/>:<div className="product-placeholder">{result.barcode}</div>}
        <dl><div><dt>{t.brand}</dt><dd>{result.product.brands||"—"}</dd></div>{result.product.quantity&&<div><dt>{lang==="ar"?"الكمية":"Quantity"}</dt><dd>{result.product.quantity}</dd></div>}<div><dt>{t.countries}</dt><dd>{result.product.countries||"—"}</dd></div><div><dt>{t.origin}</dt><dd>{result.product.origins||"—"}</dd></div><div><dt>{t.made}</dt><dd>{result.product.manufacturingPlaces||"—"}</dd></div><div><dt>{t.gs1}</dt><dd>{result.gs1.prefix} · {result.gs1.organization||"—"}</dd></div></dl>
      </div>
      {result.match&&<div className="match-evidence"><b>{result.match.levelLabel}</b><h3>{result.match.name}{result.match.parent?` · ${result.match.parent}`:""}</h3><p>{result.match.reason[lang]}</p>{result.match.note&&<small>{result.match.note[lang]}</small>}<div>{result.match.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a>)}</div></div>}
      <div className="result-notes"><p><b>{result.found?t.found:t.missing}.</b> {result.disclaimer}</p>{result.source&&<a href={result.source.url} target="_blank" rel="noreferrer">{t.source}: {result.source.name} ↗</a>}</div>
      <button type="button" className="again" onClick={()=>{setResult(null);setBarcode("");}}>{t.again} ↗</button>
    </article>}
  </div>;
}
