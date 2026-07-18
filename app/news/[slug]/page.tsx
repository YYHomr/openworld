import type { Metadata } from "next";
import { notFound } from "next/navigation";
import news from "../../../data/news.json";
import previous from "../../../data/archive/news-2026-07-17.json";

const allNews = [...news, ...previous];

type Article = (typeof news)[number];

export function generateStaticParams() {
  return allNews.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = allNews.find((item) => item.slug === slug);
  if (!article) return {};
  return { title: `${article.title} — Worldline`, description: article.dek };
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = allNews.find((item) => item.slug === slug) as Article | undefined;
  if (!article) notFound();

  const related = allNews.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main className="article-page">
      <nav className="nav shell article-nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Worldline home">WORLD<span>LINE</span><i /></a>
        <div className="nav-links"><a href="/#latest">Latest</a><a href="/#latest">World</a><a href={`/ar/news/${article.slug}`}>العربية</a></div>
        <a className="edition" href="/#latest">Back to all stories <span>←</span></a>
      </nav>

      <article>
        <header className="article-header shell">
          <div className="article-kicker"><span>{article.number}</span><b>{article.category}</b><time>{article.date}</time></div>
          <h1>{article.title}</h1>
          <p className="article-dek">{article.dek}</p>
          <div className="article-byline"><span>By {article.author}</span><span>{article.readTime}</span></div>
        </header>

        <div className="article-visual shell" aria-hidden="true">
          <div className="mini-globe"><span /><i /><b /></div>
          <p>{article.category}</p><strong>{article.number}</strong>
        </div>

        <div className="article-body shell">
          <aside>
            <span>The essentials</span>
            <ul>{article.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul>
          </aside>
          <div className="article-copy">
            {article.paragraphs.map((paragraph, index) => <p className={index === 0 ? "first-paragraph" : ""} key={paragraph}>{paragraph}</p>)}
            <div className="source-card">
              <span>Primary reporting</span>
              <p>This Worldline briefing is an original summary based on reporting from {article.source}.</p>
              <a href={article.sourceUrl} target="_blank" rel="noreferrer">Read the original source ↗</a>
            </div>
          </div>
        </div>
      </article>

      <section className="related shell">
        <p className="eyebrow"><span /> Continue reading</p>
        <div className="related-grid">
          {related.map((item) => <a href={`/news/${item.slug}`} key={item.slug}><span>{item.category}</span><h2>{item.title}</h2><b>Read story ↗</b></a>)}
        </div>
      </section>

      <footer className="footer shell"><a className="brand" href="/">WORLD<span>LINE</span><i /></a><p>Independent journalism for curious minds.</p><p>© 2026 Worldline Journal</p></footer>
    </main>
  );
}
