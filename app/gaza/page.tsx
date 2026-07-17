import type { Metadata } from "next";
import blogs from "../../data/gaza.json";

export const metadata: Metadata = {
  title: "Gaza: Life, Rights, Return — Worldline",
  description: "Five essays centering Palestinian dignity, civilian protection, education, recovery and cultural memory in Gaza."
};

export default function GazaIndex() {
  return (
    <main className="gaza-hub">
      <nav className="nav shell gaza-nav" aria-label="Main navigation">
        <a className="brand" href="/">WORLD<span>LINE</span><i /></a>
        <div className="nav-links"><a href="/">Home</a><a href="/#latest">Latest</a><a className="active" href="/gaza">Gaza</a></div>
        <a className="edition" href="#essays">Five essays <span>↓</span></a>
      </nav>
      <header className="gaza-hub-hero shell">
        <div className="gaza-flagline"><i /><i /><i /></div>
        <p className="eyebrow"><span /> Editorial series</p>
        <h1>Gaza: <em>life, rights, return.</em></h1>
        <p>Five essays written from a Palestinian human-rights perspective—centering civilian life, dignity, education, aid, reconstruction and cultural memory.</p>
        <a href="#essays">Read the series <span>↓</span></a>
      </header>
      <div className="gaza-hero-image shell">
        <img src={blogs[4].image} alt={blogs[4].imageAlt} />
        <div><b>Gaza is more than the images of its destruction.</b><span>Gaza seaport, 2018 · {blogs[4].imageCredit}</span></div>
      </div>
      <section className="gaza-essay-list shell" id="essays">
        <div className="section-heading"><div><p className="eyebrow"><span /> Five perspectives</p><h2>Read Gaza whole.</h2></div><p>These are analysis and opinion essays, clearly separated from Worldline’s news briefings.</p></div>
        {blogs.map((blog) => (
          <a className="gaza-card" href={`/gaza/${blog.slug}`} key={blog.slug}>
            <span>{blog.number}</span><div><b>{blog.eyebrow}</b><h2>{blog.title}</h2><p>{blog.dek}</p></div><i>Read essay ↗</i>
          </a>
        ))}
      </section>
      <footer className="footer shell"><a className="brand" href="/">WORLD<span>LINE</span><i /></a><p>Palestinian dignity is not negotiable.</p><p>© 2026 Worldline Journal</p></footer>
    </main>
  );
}
