export default function AboutPage({ lang }: { lang: "en" | "ar" }) {
  const ar = lang === "ar";
  const prefix = ar ? "/ar" : "";
  return (
    <main className={`about-page ${ar ? "ar-page" : ""}`} dir={ar ? "rtl" : "ltr"} lang={lang}>
      <nav className="nav shell about-nav">
        <a className="brand" href={ar ? "/ar" : "/"}>WORLD<span>LINE</span><i /></a>
        <div className="nav-links"><a href={ar ? "/ar" : "/"}>{ar ? "الرئيسية" : "Home"}</a><a href={`${prefix}/research`}>{ar ? "الأبحاث" : "Research"}</a><a href={`${prefix}/palestine`}>{ar ? "فلسطين" : "Palestine"}</a><a href={`${prefix}/gaza`}>{ar ? "غزة" : "Gaza"}</a></div>
        <a className="edition" href="#values">{ar ? "عن المؤسس" : "About the founder"} <span>{ar ? "↙" : "↗"}</span></a>
      </nav>

      <header className="about-hero shell">
        <div className="about-monogram"><span>V</span><span>O</span><span>A</span><span>I</span></div>
        <div>
          <p className="eyebrow"><span /> {ar ? "المؤسس · المصمم · المطور" : "Founder · designer · developer"}</p>
          <h1>{ar ? <>مرحباً، أنا<br/><em>VOAI.</em></> : <>Hello, I’m<br/><em>VOAI.</em></>}</h1>
          <p>{ar ? "صانع رقمي مستقل يبني مواقع وتطبيقات وتجارب ذكاء اصطناعي، ويحوّل الأفكار السريعة إلى منتجات حقيقية ذات هوية واضحة." : "An independent digital creator building websites, apps and AI experiences—turning fast ideas into real products with a clear identity."}</p>
        </div>
      </header>

      <section className="about-story shell">
        <aside><b>{ar ? "لماذا وورلدلاين؟" : "Why Worldline?"}</b><span>{ar ? "مشروع يتطور علناً، صفحة بعد صفحة." : "A project growing in public, one page at a time."}</span></aside>
        <div>
          <h2>{ar ? "بدأت الفكرة كواجهة أخبار. ثم صارت موقفاً." : "It began as a news homepage. It became a point of view."}</h2>
          <p>{ar ? "أسس VOAI وورلدلاين كمشروع تصميم ونشر مستقل: موقع أبيض وكريمي، كرة أرضية من النقاط، وصفحات خبرية متعددة. توسع لاحقاً إلى العربية، ومدونات غزة، وتاريخ فلسطين، وأخبار الذكاء الاصطناعي، ومكتب أبحاث موثق." : "VOAI started Worldline as an independent design and publishing project: a white-and-cream news site, a globe made of dots and complete story pages. It grew into Arabic editions, Gaza essays, Palestinian history, live AI news and a sourced research desk."}</p>
          <p>{ar ? "المشروع لا يدّعي أنه مؤسسة إخبارية كبيرة. قوته في كونه عملاً شخصياً سريع التطور، يجمع التصميم والبرمجة والبحث في مكان واحد." : "The project does not pretend to be a giant newsroom. Its strength is being personal and fast-moving—combining design, code and research in one place."}</p>
        </div>
      </section>

      <section className="about-values" id="values">
        <div className="shell">
          <p className="eyebrow light"><span /> {ar ? "ما الذي أبنيه؟" : "What I build"}</p>
          <div>
            <article><span>01</span><h2>{ar ? "منتجات ويب" : "Web products"}</h2><p>{ar ? "واجهات كاملة، أدوات عملية، مواقع إعلامية وتجارب تعمل على الهاتف وسطح المكتب." : "Complete interfaces, useful tools, editorial sites and responsive experiences."}</p></article>
            <article><span>02</span><h2>{ar ? "تجارب AI" : "AI experiences"}</h2><p>{ar ? "أفكار تمزج الذكاء الاصطناعي بالتصميم والتفاعل بدلاً من إضافة مربع دردشة فقط." : "Ideas that combine AI, design and interaction instead of adding another generic chat box."}</p></article>
            <article><span>03</span><h2>{ar ? "إعلام له ذاكرة" : "Media with memory"}</h2><p>{ar ? "صفحات تضع فلسطين وغزة والسودان والقضايا العربية في سياق تاريخي وإنساني موثق." : "Pages that place Palestine, Gaza, Sudan and Arab concerns in sourced human and historical context."}</p></article>
          </div>
        </div>
      </section>

      <section className="about-principles shell">
        <div><p className="eyebrow"><span /> {ar ? "مبادئ التحرير" : "Editorial principles"}</p><h2>{ar ? "الناس قبل<br/>الخوارزمية." : "People before<br/>the algorithm."}</h2></div>
        <ul>
          <li><b>01</b><span>{ar ? "فلسطين وغزة من منظور الحقوق والكرامة والحرية." : "Palestine and Gaza through rights, dignity and freedom."}</span></li>
          <li><b>02</b><span>{ar ? "مصادر قابلة للفتح، وأرقام مؤرخة، وتصحيح واضح عند الخطأ." : "Openable sources, dated figures and visible corrections when wrong."}</span></li>
          <li><b>03</b><span>{ar ? "لا كراهية ضد الشعوب أو الأديان؛ المساءلة موجهة للسلطة والسياسة." : "No hatred toward peoples or religions; accountability targets power and policy."}</span></li>
          <li><b>04</b><span>{ar ? "العربية والإنجليزية مساحتان أصليتان، لا نسخة ثانوية وأخرى أساسية." : "Arabic and English are both first-class editions."}</span></li>
        </ul>
      </section>

      <section className="about-close"><div className="shell"><b>WORLDLINE / VOAI</b><blockquote>{ar ? "«ابنِ الفكرة، ثم اجعلها أوضح وأصدق وأكثر إنسانية.»" : "“Build the idea. Then make it clearer, truer and more human.”"}</blockquote><a href={`${prefix}/research`}>{ar ? "ادخل مكتب الأبحاث ↖" : "Enter the research desk ↗"}</a></div></section>
      <footer className="footer shell"><a className="brand" href={ar ? "/ar" : "/"}>WORLD<span>LINE</span><i /></a><p>{ar ? "مشروع مستقل من VOAI." : "An independent project by VOAI."}</p><p>© 2026</p></footer>
    </main>
  );
}
