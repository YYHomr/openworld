import news from "../data/news.json";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const lead = news[0];
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Worldline home">WORLD<span>LINE</span><i /></a>
          <div className="nav-links">
            <a href="#latest">Latest</a><a href="#latest">World</a><a href="#ideas">Ideas</a><a href="#newsletter">Brief</a>
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
            <div className="globe">
              <span className="land land-a" /><span className="land land-b" /><span className="land land-c" /><span className="land land-d" /><span className="globe-shine" />
            </div>
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
          <span>Follow the story</span><a href="#latest">Climate</a><a href="#latest">Artificial intelligence</a><a href="#latest">Markets</a><a href="#latest">Science & space</a><a className="all-topics" href="#latest">All stories <Arrow /></a>
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

      <section className="manifesto" id="ideas">
        <div className="shell manifesto-grid"><p className="eyebrow light"><span /> Our point of view</p><blockquote>“The best news doesn&apos;t tell you what to think. It gives you more to think about.”</blockquote><a href="#latest">Read the edition <Arrow /></a></div>
      </section>

      <section className="newsletter shell" id="newsletter">
        <div><p className="eyebrow"><span /> Start informed</p><h2>One good email.<br />Every morning.</h2></div>
        <form className="signup-form"><label htmlFor="email">Email address</label><div><input id="email" type="email" placeholder="you@example.com" required /><button type="button" aria-label="Subscribe">Join the brief <span>→</span></button></div><small>No noise. Just the day&apos;s essential stories.</small></form>
      </section>

      <footer className="footer shell"><a className="brand" href="#top">WORLD<span>LINE</span><i /></a><p>Independent journalism for curious minds.</p><p>© 2026 Worldline Journal</p></footer>
    </main>
  );
}
