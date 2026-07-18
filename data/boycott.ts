export type BoycottLevel = "priority" | "organic" | "pressure" | "community";

export type LocalText = { en: string; ar: string };

export type BoycottEntry = {
  id: string;
  name: string;
  parent?: string;
  aliases: string[];
  level: BoycottLevel;
  reason: LocalText;
  note?: LocalText;
  sources: { label: string; url: string }[];
};

const bdsGuide = "https://bdsmovement.net/Guide-to-BDS-Boycott";

export const boycottEntries: BoycottEntry[] = [
  { id:"chevron", name:"Chevron / Caltex / Texaco", aliases:["chevron","caltex","texaco"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج ضمن أهداف المقاطعة الاستهلاكية ذات الأولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"intel", name:"Intel", aliases:["intel"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج كهدف مقاطعة استهلاكية ذي أولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"dell", name:"Dell", aliases:["dell","alienware"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج كهدف مقاطعة استهلاكية ذي أولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"siemens", name:"Siemens", aliases:["siemens"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج كهدف مقاطعة استهلاكية ذي أولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"hp", name:"HP", parent:"HP Inc. / Hewlett Packard Enterprise", aliases:["hp","hewlett packard","hewlett-packard"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج كهدف مقاطعة استهلاكية ذي أولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"carrefour", name:"Carrefour", aliases:["carrefour"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج كهدف مقاطعة استهلاكية ذي أولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"axa", name:"AXA", aliases:["axa"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج كهدف مقاطعة استهلاكية ذي أولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"disney", name:"Disney+", parent:"The Walt Disney Company", aliases:["disney","disney+","walt disney"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج كهدف مقاطعة استهلاكية ذي أولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"sodastream", name:"SodaStream", parent:"PepsiCo", aliases:["sodastream","soda stream"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج كهدف مقاطعة استهلاكية ذي أولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"remax", name:"RE/MAX", aliases:["re/max","remax"], level:"priority", reason:{en:"Named as a priority consumer boycott target in the BDS movement guide.",ar:"مُدرج كهدف مقاطعة استهلاكية ذي أولوية في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },

  { id:"cocacola", name:"Coca-Cola", parent:"The Coca-Cola Company", aliases:["coca cola","coca-cola","coke","fanta","sprite","dasani","minute maid","powerade","smartwater","costa coffee"], level:"organic", reason:{en:"Included among grassroots boycott campaigns supported by the BDS movement.",ar:"مُدرج ضمن حملات المقاطعة الشعبية التي تدعمها حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"mcdonalds", name:"McDonald’s", aliases:["mcdonalds","mcdonald's","mcdonald’s"], level:"organic", reason:{en:"Included among grassroots boycott campaigns supported by the BDS movement.",ar:"مُدرج ضمن حملات المقاطعة الشعبية التي تدعمها حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"burgerking", name:"Burger King", aliases:["burger king"], level:"organic", reason:{en:"Included among grassroots boycott campaigns supported by the BDS movement.",ar:"مُدرج ضمن حملات المقاطعة الشعبية التي تدعمها حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"pizzahut", name:"Pizza Hut", parent:"Yum! Brands", aliases:["pizza hut"], level:"organic", reason:{en:"Included among grassroots boycott campaigns supported by the BDS movement.",ar:"مُدرج ضمن حملات المقاطعة الشعبية التي تدعمها حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"papajohns", name:"Papa John’s", aliases:["papa johns","papa john's","papa john’s"], level:"organic", reason:{en:"Included among grassroots boycott campaigns supported by the BDS movement.",ar:"مُدرج ضمن حملات المقاطعة الشعبية التي تدعمها حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"wix", name:"Wix", aliases:["wix","wix.com"], level:"organic", reason:{en:"Included among grassroots boycott campaigns supported by the BDS movement.",ar:"مُدرج ضمن حملات المقاطعة الشعبية التي تدعمها حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },

  { id:"google", name:"Google", parent:"Alphabet", aliases:["google","alphabet","pixel","fitbit","nest"], level:"pressure", reason:{en:"Named as a pressure target: the guide calls for campaigns and public pressure rather than treating every product as a priority consumer target.",ar:"مُدرج كهدف ضغط: يدعو الدليل إلى الحملات والضغط العام لا إلى اعتبار كل منتج هدف مقاطعة استهلاكية ذا أولوية."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"amazon", name:"Amazon", aliases:["amazon","amazon basics","amazonbasics","kindle","audible"], level:"pressure", reason:{en:"Named as a pressure target in the BDS movement guide.",ar:"مُدرج كهدف ضغط في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"booking", name:"Booking.com", parent:"Booking Holdings", aliases:["booking.com","booking holdings"], level:"pressure", reason:{en:"Named as a pressure target in the BDS movement guide.",ar:"مُدرج كهدف ضغط في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"airbnb", name:"Airbnb", aliases:["airbnb"], level:"pressure", reason:{en:"Named as a pressure target in the BDS movement guide.",ar:"مُدرج كهدف ضغط في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"expedia", name:"Expedia", parent:"Expedia Group", aliases:["expedia","hotels.com","vrbo","trivago"], level:"pressure", reason:{en:"Named as a pressure target in the BDS movement guide.",ar:"مُدرج كهدف ضغط في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },
  { id:"teva", name:"Teva", aliases:["teva","teva pharmaceuticals"], level:"pressure", reason:{en:"Named as a pressure target in the BDS movement guide.",ar:"مُدرج كهدف ضغط في دليل حركة BDS."}, sources:[{label:"BDS movement guide",url:bdsGuide}] },

  { id:"kfc", name:"KFC", parent:"Yum! Brands", aliases:["kfc","kentucky fried chicken"], level:"community", reason:{en:"Included by WLB as a broader community boycott campaign; it is not presented here as an official BDS priority target.",ar:"تُدرجه WLB ضمن حملات المقاطعة المجتمعية الأوسع، ولا نقدمه هنا كهدف رسمي ذي أولوية لدى BDS."}, note:{en:"KFC operates in Israel and parent company Yum! Brands acquired Israeli ordering technology company Tictuk in 2021. This is not a claim that KFC directly supplies the Israeli military.",ar:"تعمل KFC في إسرائيل، واستحوذت شركتها الأم Yum! Brands عام 2021 على شركة تكنولوجيا الطلبات الإسرائيلية Tictuk. هذا لا يعني ادعاء أن KFC تزود الجيش الإسرائيلي مباشرة."}, sources:[{label:"KFC Israel",url:"https://www.kfc.co.il/"},{label:"Yum! Brands — Tictuk acquisition",url:"https://www.yum.com/wps/portal/yumbrands/Yumbrands/news/press-releases/yum%20brands%20to%20acquire%20leading%20omnichannel%20ordering%20and%20marketing%20platform%20company/"}] }
];

export const levelCopy: Record<BoycottLevel, LocalText> = {
  priority:{en:"BDS priority target",ar:"هدف أولوية لدى BDS"},
  organic:{en:"BDS-supported grassroots campaign",ar:"حملة شعبية تدعمها BDS"},
  pressure:{en:"Pressure target",ar:"هدف ضغط"},
  community:{en:"WLB community list",ar:"قائمة WLB المجتمعية"}
};

export function normalizeBrand(value: string) {
  return value.toLowerCase().normalize("NFKD").replace(/[’']/g, "").replace(/[^a-z0-9+]+/g, " ").trim();
}

export function findBoycottMatch(value: string) {
  const normalized = normalizeBrand(value);
  const parts = value.split(/[,;|/]/).map(normalizeBrand).filter(Boolean);
  return boycottEntries.find(entry => entry.aliases.some(raw => {
    const alias = normalizeBrand(raw);
    return alias.length <= 3 ? parts.includes(alias) || normalized === alias : (` ${normalized} `).includes(` ${alias} `);
  })) ?? null;
}
