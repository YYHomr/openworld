import type { Metadata } from "next";
import { notFound } from "next/navigation";
import blogs from "../../../data/gaza.json";

type Blog = (typeof blogs)[number];

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  return blog ? { title: `${blog.title} — Worldline Gaza`, description: blog.dek } : {};
}

function BarGraph({ blog }: { blog: Blog }) {
  return (
    <figure className="gaza-chart">
      <figcaption><span>Source-backed perspective</span><h2>{blog.chart.title}</h2><p>{blog.chart.description}</p></figcaption>
      <div className="chart-bars">
        {blog.chart.items.map((item) => (
          <div className="chart-row" key={item.label}>
            <div><span>{item.label}</span><b>{item.value} <small>{blog.chart.unit}</small></b></div>
            <i><em style={{ width: `${Math.max(3, (item.value / blog.chart.max) * 100)}%` }} /></i>
          </div>
        ))}
      </div>
      <a href={blog.sourceUrl} target="_blank" rel="noreferrer">{blog.sourceName} ↗</a>
    </figure>
  );
}

export default async function GazaBlog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug) as Blog | undefined;
  if (!blog) notFound();
  const next = blogs[(blogs.findIndex((item) => item.slug === slug) + 1) % blogs.length];

  return (
    <main className="gaza-blog">
      <nav className="nav shell gaza-nav" aria-label="Main navigation">
        <a className="brand" href="/">WORLD<span>LINE</span><i /></a>
        <div className="nav-links"><a href="/">Home</a><a href="/gaza">Gaza series</a><a href="/#latest">Latest</a></div>
        <a className="edition" href="/gaza">All five essays <span>←</span></a>
      </nav>
      <article>
        <header className="gaza-article-header shell">
          <p className="gaza-label"><span>Gaza series / {blog.number}</span><b>Opinion & analysis</b></p>
          <p className="eyebrow"><span /> {blog.eyebrow}</p>
          <h1>{blog.title}</h1>
          <p className="gaza-dek">{blog.dek}</p>
          <div className="article-byline"><span>Worldline Editorial</span><span>{blog.date}</span><span>{blog.readTime}</span></div>
        </header>
        <figure className="gaza-photo shell">
          <img src={blog.image} alt={blog.imageAlt} />
          <figcaption><span>{blog.imageAlt}</span><a href={blog.imagePage} target="_blank" rel="noreferrer">{blog.imageCredit} ↗</a></figcaption>
        </figure>
        <div className="gaza-story shell">
          <aside><span>Our position</span><blockquote>“{blog.quote}”</blockquote><a href="/gaza">About this series →</a></aside>
          <div className="gaza-copy">
            {blog.paragraphs.slice(0,2).map((p,index)=><p className={index===0?"first-paragraph":""} key={p}>{p}</p>)}
            <BarGraph blog={blog} />
            {blog.paragraphs.slice(2).map((p)=><p key={p}>{p}</p>)}
            <div className="gaza-note"><b>Editorial note</b><p>This essay argues from a Palestinian human-rights perspective. Its quantitative claims link to the named UN or international institutional source.</p></div>
          </div>
        </div>
      </article>
      <a className="next-gaza shell" href={`/gaza/${next.slug}`}><span>Next in the Gaza series</span><h2>{next.title}</h2><b>Read essay ↗</b></a>
      <footer className="footer shell"><a className="brand" href="/">WORLD<span>LINE</span><i /></a><p>Palestinian dignity is not negotiable.</p><p>© 2026 Worldline Journal</p></footer>
    </main>
  );
}
