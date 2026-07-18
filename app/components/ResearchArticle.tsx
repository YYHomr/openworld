import type { ResearchDossier, ResearchLang } from "../../data/research";

export default function ResearchArticle({ dossier, lang }: { dossier: ResearchDossier; lang: ResearchLang }) {
  const ar = lang === "ar";
  const prefix = ar ? "/ar" : "";
  return (
    <main className={`research-page dossier-page ${ar ? "ar-page" : ""}`} dir={ar ? "rtl" : "ltr"} lang={lang}>
      <nav className="nav shell research-nav" aria-label={ar ? "التنقل الرئيسي" : "Main navigation"}>
        <a className="brand" href={ar ? "/ar" : "/"}>WORLD<span>LINE</span><i /></a>
        <div className="nav-links">
          <a href={`${prefix}/research`}>{ar ? "الأبحاث" : "Research"}</a>
          <a href={`${prefix}/palestine`}>{ar ? "فلسطين" : "Palestine"}</a>
          <a href={`${prefix}/gaza`}>{ar ? "غزة" : "Gaza"}</a>
          <a href={`${prefix}/about`}>{ar ? "عن الموقع" : "About"}</a>
        </div>
        <a className="edition" href={`${prefix}/research`}>{ar ? "كل الملفات" : "All dossiers"} <span>{ar ? "↖" : "↗"}</span></a>
      </nav>

      <header className="dossier-hero shell">
        <div className="dossier-index">
          <span>{dossier.number}</span>
          <p>{dossier.topic}</p>
        </div>
        <div className="dossier-title">
          <p className="eyebrow"><span /> {ar ? "مكتب البحث · منظور عربي فلسطيني" : "Research desk · Palestinian and Arab perspective"}</p>
          <h1>{dossier.title}</h1>
          <p>{dossier.subtitle}</p>
        </div>
        <aside>
          <b>{ar ? "آخر تحقق" : "Last verified"}</b>
          <time>{dossier.updated}</time>
          <span>{ar ? "تُراجع الأرقام عند تغيّر المصدر." : "Figures are revised when sources change."}</span>
        </aside>
      </header>

      <section className="dossier-position">
        <div className="shell">
          <b>{ar ? "موقفنا التحريري" : "Our editorial position"}</b>
          <p>{dossier.position}</p>
        </div>
      </section>

      <section className="dossier-facts shell" aria-label={ar ? "أهم الأرقام" : "Key figures"}>
        {dossier.facts.map((fact) => (
          <article key={fact.label}>
            <strong>{fact.value}</strong>
            <h2>{fact.label}</h2>
            <p>{fact.detail}</p>
          </article>
        ))}
      </section>

      <section className="dossier-content shell">
        <aside className="dossier-rail">
          <b>{ar ? "في هذا الملف" : "In this dossier"}</b>
          {dossier.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.title}>{String(index + 1).padStart(2, "0")} · {section.title}</a>)}
          <a href="#timeline">{ar ? "الخط الزمني" : "Timeline"}</a>
          <a href="#sources">{ar ? "المصادر" : "Sources"}</a>
        </aside>
        <div className="dossier-copy">
          {dossier.sections.map((section, index) => (
            <article id={`section-${index + 1}`} key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
          ))}

          <section className="research-method">
            <b>{ar ? "قاعدة الدقة" : "Accuracy rule"}</b>
            <p>{ar
              ? "نفرّق بين الرقم المؤكد والتقدير، وبين الاتهام والحكم، وبين استنتاج منظمة حقوقية وقرار محكمة. الانحياز لكرامة الفلسطينيين والعرب لا يحتاج إلى تحريف الأدلة."
              : "We distinguish a verified count from an estimate, an allegation from a judgment, and a rights body’s finding from a court ruling. Centering Palestinian and Arab dignity does not require distorting evidence."}</p>
          </section>

          <section className="dossier-timeline" id="timeline">
            <p className="eyebrow"><span /> {ar ? "السياق الزمني" : "Context in time"}</p>
            <h2>{ar ? "خط زمني مختصر." : "A concise timeline."}</h2>
            <div>
              {dossier.timeline.map((item) => <article key={item.date + item.event}><time>{item.date}</time><p>{item.event}</p></article>)}
            </div>
          </section>

          <section className="dossier-sources" id="sources">
            <p className="eyebrow"><span /> {ar ? "سجل الأدلة" : "Evidence ledger"}</p>
            <h2>{ar ? "اقرأ المصادر الأصلية." : "Read the original record."}</h2>
            <p>{ar ? "المصادر أدناه أممية أو قضائية أو حكومية أو صادرة عن هيئات إنسانية وحقوقية معروفة. الروابط الخارجية تفتح في نافذة جديدة." : "These are UN, court, government, humanitarian or established rights sources. External links open in a new tab."}</p>
            <div>
              {dossier.sources.map((source, index) => (
                <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{source.label}</h3>
                  <p>{source.publisher} · {source.date}</p>
                  <b>↗</b>
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="dossier-next">
        <div className="shell">
          <p>{ar ? "المعرفة موقف حين تكون موثّقة." : "Evidence becomes a position when it is made legible."}</p>
          <a href={`${prefix}/research`}>{ar ? "العودة إلى مكتب الأبحاث" : "Return to the research desk"} <span>{ar ? "↖" : "↗"}</span></a>
        </div>
      </section>

      <footer className="footer shell"><a className="brand" href={ar ? "/ar" : "/"}>WORLD<span>LINE</span><i /></a><p>{ar ? "صحافة مستقلة من أجل الذاكرة والعدالة." : "Independent publishing for memory and justice."}</p><p>© 2026 Worldline</p></footer>
    </main>
  );
}
