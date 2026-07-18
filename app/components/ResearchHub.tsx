import { researchByLang, type ResearchLang } from "../../data/research";

export default function ResearchHub({ lang }: { lang: ResearchLang }) {
  const ar = lang === "ar";
  const prefix = ar ? "/ar" : "";
  const items = researchByLang[lang];
  return (
    <main className={`research-page research-hub ${ar ? "ar-page" : ""}`} dir={ar ? "rtl" : "ltr"} lang={lang}>
      <nav className="nav shell research-nav">
        <a className="brand" href={ar ? "/ar" : "/"}>WORLD<span>LINE</span><i /></a>
        <div className="nav-links"><a href={ar ? "/ar" : "/"}>{ar ? "الرئيسية" : "Home"}</a><a href={`${prefix}/palestine`}>{ar ? "فلسطين" : "Palestine"}</a><a href={`${prefix}/gaza`}>{ar ? "غزة" : "Gaza"}</a><a href={`${prefix}/about`}>{ar ? "عن الموقع" : "About"}</a></div>
        <a className="edition" href="#dossiers">{ar ? "5 ملفات موثقة" : "5 sourced dossiers"} <span>{ar ? "↙" : "↗"}</span></a>
      </nav>

      <header className="research-hub-hero shell">
        <div>
          <p className="eyebrow"><span /> {ar ? "بحث عميق · تحديث 18 يوليو 2026" : "Deep research · updated 18 July 2026"}</p>
          <h1>{ar ? <>الخبر يحتاج<br/><em>ذاكرة ودليلاً.</em></> : <>News needs<br/><em>memory and proof.</em></>}</h1>
        </div>
        <div>
          <p>{ar ? "ملفات عن فلسطين والسودان والجوع في أفريقيا وترامب ونتنياهو. مكتوبة من منظور عربي وفلسطيني، ومسنودة إلى سجل يمكن للقارئ فتحه وفحصه." : "Dossiers on Palestine, Sudan, hunger across Africa, Trump and Netanyahu. Written from an Arab and Palestinian perspective, with a source record every reader can inspect."}</p>
          <div><b>{ar ? "مبدأ المكتب" : "Desk principle"}</b><span>{ar ? "لا حياد أمام التهجير والتجويع، ولا مبالغة في الدليل." : "No neutrality about displacement or starvation; no exaggeration of the evidence."}</span></div>
        </div>
      </header>

      <section className="research-dossiers shell" id="dossiers">
        {items.map((item) => (
          <a href={`${prefix}/research/${item.slug}`} className="research-card" key={item.slug}>
            <span>{item.number}</span>
            <div><p>{item.topic}</p><h2>{item.title}</h2><small>{item.subtitle}</small></div>
            <b>{ar ? "افتح الملف ↖" : "Open dossier ↗"}</b>
          </a>
        ))}
      </section>

      <section className="research-standards">
        <div className="shell">
          <p className="eyebrow light"><span /> {ar ? "كيف نعمل" : "How we work"}</p>
          <h2>{ar ? "موقف واضح.<br/>مصدر مفتوح." : "A clear position.<br/>An open record."}</h2>
          <div>
            <article><b>01</b><h3>{ar ? "مصادر أصلية" : "Primary record"}</h3><p>{ar ? "الأمم المتحدة والمحاكم والهيئات الإنسانية والسجلات الحكومية قبل الاقتباسات الثانوية." : "UN, courts, humanitarian bodies and government records before second-hand summaries."}</p></article>
            <article><b>02</b><h3>{ar ? "وصف قانوني دقيق" : "Precise legal language"}</h3><p>{ar ? "نقول «اتهام» أو «نتيجة تحقيق» أو «حكم» بحسب الحالة، ولا نخلط بينها." : "Allegation, investigative finding and judgment are labeled for what they are."}</p></article>
            <article><b>03</b><h3>{ar ? "الإنسان أولاً" : "People first"}</h3><p>{ar ? "الأرقام تخدم فهم حياة الناس، لا تحويلهم إلى أرقام." : "Numbers explain lived reality; they never replace the people inside them."}</p></article>
          </div>
        </div>
      </section>

      <footer className="footer shell"><a className="brand" href={ar ? "/ar" : "/"}>WORLD<span>LINE</span><i /></a><p>{ar ? "مكتب بحث مستقل بمنظور عربي فلسطيني." : "An independent research desk with an Arab and Palestinian perspective."}</p><p>© 2026 Worldline</p></footer>
    </main>
  );
}
