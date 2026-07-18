import { NextRequest, NextResponse } from "next/server";
import { findBoycottMatch, levelCopy } from "../../../data/boycott";

type Product = Record<string, unknown>;

const catalogues = [
  { id:"food", name:"Open Food Facts", base:"https://world.openfoodfacts.org" },
  { id:"beauty", name:"Open Beauty Facts", base:"https://world.openbeautyfacts.org" },
  { id:"products", name:"Open Products Facts", base:"https://world.openproductsfacts.org" }
];

const prefixes: { from:number; to:number; en:string; ar:string }[] = [
  {from:600,to:601,en:"GS1 South Africa",ar:"GS1 جنوب أفريقيا"},{from:604,to:604,en:"GS1 Senegal",ar:"GS1 السنغال"},
  {from:608,to:608,en:"GS1 Bahrain",ar:"GS1 البحرين"},{from:611,to:611,en:"GS1 Morocco",ar:"GS1 المغرب"},
  {from:613,to:613,en:"GS1 Algeria",ar:"GS1 الجزائر"},{from:615,to:615,en:"GS1 Nigeria",ar:"GS1 نيجيريا"},
  {from:616,to:616,en:"GS1 Kenya",ar:"GS1 كينيا"},{from:619,to:619,en:"GS1 Tunisia",ar:"GS1 تونس"},
  {from:621,to:621,en:"GS1 Syria",ar:"GS1 سوريا"},{from:622,to:622,en:"GS1 Egypt",ar:"GS1 مصر"},
  {from:624,to:624,en:"GS1 Libya",ar:"GS1 ليبيا"},{from:625,to:625,en:"GS1 Jordan",ar:"GS1 الأردن"},
  {from:627,to:627,en:"GS1 Kuwait",ar:"GS1 الكويت"},{from:628,to:628,en:"GS1 Saudi Arabia",ar:"GS1 السعودية"},
  {from:629,to:629,en:"GS1 Emirates",ar:"GS1 الإمارات"},{from:630,to:630,en:"GS1 Qatar",ar:"GS1 قطر"},
  {from:729,to:729,en:"GS1 Israel",ar:"GS1 إسرائيل"}
];

function text(value: unknown) { return typeof value === "string" ? value.trim() : ""; }
function hasIsrael(value: string) { return /(^|[\s,;_-])(israel|israeli|إسرائيل|اسرائيل)([\s,;_-]|$)/i.test(value); }

async function findProduct(barcode: string) {
  const fields = "code,product_name,product_name_en,product_name_ar,brands,image_front_url,quantity,countries,origins,manufacturing_places,categories,nutriscore_grade,ecoscore_grade";
  for (const source of catalogues) {
    try {
      const response = await fetch(`${source.base}/api/v2/product/${barcode}.json?fields=${fields}`, {
        headers:{"User-Agent":"Worldline-WLB/1.0 (https://openworld-peach.vercel.app/wlb)"},
        next:{revalidate:86400}
      });
      if (!response.ok) continue;
      const json = await response.json();
      if (json.status === 1 && json.product) return { product:json.product as Product, source };
    } catch { /* Try the next open catalogue. */ }
  }
  return null;
}

export async function GET(request: NextRequest) {
  const barcode = (request.nextUrl.searchParams.get("barcode") || "").replace(/\D/g, "");
  const lang = request.nextUrl.searchParams.get("lang") === "ar" ? "ar" : "en";
  if (barcode.length < 8 || barcode.length > 14) return NextResponse.json({error:lang === "ar" ? "أدخل باركوداً من 8 إلى 14 رقماً." : "Enter an 8–14 digit barcode."},{status:400});

  const found = await findProduct(barcode);
  const product = found?.product ?? {};
  const brands = text(product.brands);
  const name = text(product[`product_name_${lang}`]) || text(product.product_name) || text(product.product_name_en) || text(product.product_name_ar);
  const match = findBoycottMatch(brands || name);
  const prefixNumber = Number(barcode.slice(0,3));
  const prefix = prefixes.find(item => prefixNumber >= item.from && prefixNumber <= item.to) ?? null;
  const origins = text(product.origins);
  const manufacturing = text(product.manufacturing_places);
  const explicitIsrael = hasIsrael(`${origins} ${manufacturing}`);
  const israeliPrefix = prefixNumber === 729;
  const status = match ? (match.level === "pressure" ? "pressure" : "boycott") : (explicitIsrael || israeliPrefix ? "review" : "not_listed");

  return NextResponse.json({
    barcode, status, found:Boolean(found),
    product:{name:name || null,brands:brands || null,image:text(product.image_front_url)||null,quantity:text(product.quantity)||null,categories:text(product.categories)||null,countries:text(product.countries)||null,origins:origins||null,manufacturingPlaces:manufacturing||null,nutriscore:text(product.nutriscore_grade)||null,ecoscore:text(product.ecoscore_grade)||null},
    source:found ? {id:found.source.id,name:found.source.name,url:`${found.source.base}/product/${barcode}`} : null,
    match:match ? {...match, levelLabel:levelCopy[match.level][lang]} : null,
    gs1:prefix ? {prefix:barcode.slice(0,3),organization:prefix[lang],isIsraeliPrefix} : {prefix:barcode.slice(0,3),organization:null,isIsraeliPrefix:false},
    explicitIsrael,
    disclaimer:lang === "ar" ? "بادئة GS1 تحدد الجهة التي خصصت الرمز، لا بلد التصنيع أو المنشأ بالضرورة." : "A GS1 prefix identifies the organization that allocated the code—not necessarily the country of manufacture or origin."
  }, {headers:{"Cache-Control":"public, s-maxage=86400, stale-while-revalidate=604800"}});
}
