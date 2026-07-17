const Arrow = () => <span aria-hidden="true">↗</span>;

const stories = [
  { number: "01", category: "Technology", title: "The quiet race to redesign how the world computes", time: "6 min read" },
  { number: "02", category: "Culture", title: "Why small cinemas are becoming big cultural landmarks", time: "4 min read" },
  { number: "03", category: "Cities", title: "The new public spaces making cities feel human again", time: "8 min read" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Worldline home">WORLD<span>LINE</span><i /></a>
          <div className="nav-links">
            <a href="#latest">Latest</a><a href="#world">World</a><a href="#ideas">Ideas</a><a href="#culture">Culture</a>
          </div>
          <a className="edition" href="#newsletter">The Daily Edition <span>↗</span></a>
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
            <div className="brief-head"><p><span className="live-dot" /> Live brief</p><time>Friday, July 17</time></div>
            <a className="brief-lead" href="#story">
              <span>World / 09:42</span><h2>A new chapter in global cooperation is taking shape</h2>
              <p>Leaders meet with climate, trade, and technology at the center of the agenda.</p><i><Arrow /></i>
            </a>
            <div className="brief-ticker"><span>Also today</span><p>Markets steady as new data arrives</p><b>+2</b></div>
          </aside>
        </div>

        <div className="topic-strip shell" aria-label="Popular topics">
          <span>Follow the story</span><a href="#climate">Climate</a><a href="#ai">Artificial intelligence</a><a href="#design">Design</a><a href="#future">The future of cities</a><a className="all-topics" href="#ideas">All topics <Arrow /></a>
        </div>
      </section>

      <section className="latest shell" id="latest">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Editor&apos;s selection</p><h2>Worth your time.</h2></div>
          <p>Three thoughtful reads to move beyond the headline and see the bigger picture.</p>
        </div>
        <div className="story-list">
          {stories.map((story) => (
            <a className="story-row" href="#story" key={story.number}>
              <span className="story-number">{story.number}</span><span className="story-category">{story.category}</span><h3>{story.title}</h3><span className="story-time">{story.time}</span><span className="story-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="manifesto" id="ideas">
        <div className="shell manifesto-grid"><p className="eyebrow light"><span /> Our point of view</p><blockquote>“The best news doesn&apos;t tell you what to think. It gives you more to think about.”</blockquote><a href="#about">How we work <Arrow /></a></div>
      </section>

      <section className="newsletter shell" id="newsletter">
        <div><p className="eyebrow"><span /> Start informed</p><h2>One good email.<br />Every morning.</h2></div>
        <form className="signup-form"><label htmlFor="email">Email address</label><div><input id="email" type="email" placeholder="you@example.com" required /><button type="button" aria-label="Subscribe">Join the brief <span>→</span></button></div><small>No noise. Just the day&apos;s essential stories.</small></form>
      </section>

      <footer className="footer shell"><a className="brand" href="#top">WORLD<span>LINE</span><i /></a><p>Independent journalism for curious minds.</p><p>© 2026 Worldline Journal</p></footer>
    </main>
  );
}
