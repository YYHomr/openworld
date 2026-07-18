import news from "../data/news.json";
import DotGlobe from "./components/DotGlobe";
import NewsletterForm from "./components/NewsletterForm";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const lead = news[0];
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Worldline home">WORLD<span>LINE</span><i /></a>
          <div className="nav-links">
            <a href="#latest">Latest</a><a href="/ai">AI</a><a href="/research">Research</a><a href="/palestine">Palestine</a><a href="/gaza">Gaza</a><a href="/about">About</a>
          </div>
          <a className="edition" href="#latest">10 latest stories <span>↗</span></a>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Independent stories for a connected world</p>
            <h1>The world,<br />in <em>perspective.</em></h1>
            <p className="dek">News with depth, context, and a point of view. One clear place to understand what matters—and why it matters now.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#latest">Explore today <Arrow /></a>
              <a className="text-link" href="#newsletter">Get the morning brief <span>→</span></a>
            </div>
          </div>

          <div className="globe-stage" aria-label="Abstract black globe illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="globe-shadow" />
            <div className="globe"><DotGlobe /></div>
            <div className="globe-note note-top"><b>24:00</b><span>Stories never stop</span></div>
            <div className="globe-note note-bottom"><b>GLOBAL</b><span>Reporting without borders</span></div>
          </div>

          <aside className="brief-card">
            <div className="brief-head"><p><span className="live-dot" /> Lead story</p><time>July 17, 2026</time></div>
            <a className="brief-lead" href={`/news/${lead.slug}`}>
              <span>{lead.category} / Latest</span><h2>{lead.title}</h2>
              <p>{lead.dek}</p><i><Arrow /></i>
            </a>
            <div className="brief-ticker"><span>Today</span><p>Ten essential stories, one clear edition</p><b>10</b></div>
          </aside>
        </div>

        <div className="topic-strip shell" aria-label="Popular topics">
          <span>Research desk</span><a href="/research/palestine">Palestine</a><a href="/research/sudan">Sudan</a><a href="/research/african-hunger">African hunger</a><a href="/research/trump">Trump</a><a href="/research/netanyahu">Netanyahu</a><a className="all-topics" href="/research">All dossiers <Arrow /></a>
        </div>
      </section>

      <section className="latest shell" id="latest">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Updated July 17, 2026</p><h2>The latest ten.</h2></div>
          <p>Ten current stories across world affairs, technology, science, climate and business—each with its own complete page.</p>
        </div>
        <div className="story-list">
          {news.map((story) => (
            <a className="story-row" href={`/news/${story.slug}`} key={story.number}>
              <span className="story-number">{story.number}</span><span className="story-category">{story.category}</span><h3>{story.title}</h3><span className="story-time">{story.readTime}</span><span className="story-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>


      <section className="home-ai"><div className="shell home-ai-grid"><div><p className="eyebrow"><span/> Live automatic feed</p><h2>AI news,<br/><em>updated itself.</em></h2></div><p>Fresh reporting on models, research, policy and companies, pulled from an open global news database every 15 minutes.</p><a href="/ai">Open the AI desk ↗</a></div></section>

      <section className="home-research"><div className="shell"><div className="home-research-head"><div><p className="eyebrow light"><span/> Deep research · verified 18 July 2026</p><h2>Memory,<br/><em>with receipts.</em></h2></div><p>Five sourced dossiers from a Palestinian and Arab perspective—clear about our position, precise about the evidence.</p><a href="/research">Open the research desk ↗</a></div><div className="home-research-list"><a href="/research/palestine"><span>01</span><b>Palestine</b><i>Law, land and life ↗</i></a><a href="/research/sudan"><span>02</span><b>Sudan</b><i>Civilians before generals ↗</i></a><a href="/research/african-hunger"><span>03</span><b>African hunger</b><i>Famines are made ↗</i></a><a href="/research/trump"><span>04</span><b>Trump</b><i>Power and Palestine ↗</i></a><a href="/research/netanyahu"><span>05</span><b>Netanyahu</b><i>Command and accountability ↗</i></a></div></div></section>

      <section className="home-palestine"><div className="shell home-palestine-grid"><div><p className="eyebrow light"><span /> New history guide</p><h2>Palestine,<br /><em>remembered whole.</em></h2></div><p>A map-led, six-part guide to history, the Nakba, daily life, Al-Quds, the olive and fig, and Gaza—written from a Palestinian perspective.</p><a href="/palestine">Explore Palestine <span>↗</span></a></div></section>

      <section className="home-gaza">
        <div className="shell home-gaza-grid">
          <div>
            <p className="eyebrow light"><span /> New editorial series</p>
            <h2>Gaza: life,<br /><em>rights, return.</em></h2>
          </div>
          <p>Five essays centering Palestinian civilians, education, aid, reconstruction and cultural memory—with source-backed graphs and documentary photography.</p>
          <a href="/gaza">Explore the Gaza series <span>↗</span></a>
        </div>
      </section>

      <section className="manifesto" id="ideas">
        <div className="shell manifesto-grid"><p className="eyebrow light"><span /> Our point of view</p><blockquote>“The best news doesn&apos;t tell you what to think. It gives you more to think about.”</blockquote><a href="#latest">Read the edition <Arrow /></a></div>
      </section>

      <section className="newsletter shell" id="newsletter">
        <div><p className="eyebrow"><span /> Delivered through Gmail</p><h2>Today&apos;s brief,<br />in your inbox.</h2></div>
        <NewsletterForm lang="en" />
      </section>

      <footer className="footer shell"><a className="brand" href="#top">WORLD<span>LINE</span><i /></a><p>Independent journalism for curious minds. <a href="/about">About VOAI ↗</a></p><p>© 2026 Worldline Journal</p></footer>
    </main>
  );
}
