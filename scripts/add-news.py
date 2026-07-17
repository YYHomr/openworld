#!/usr/bin/env python3
"""Append a story to data/news.json.

Example:
python scripts/add-news.py --slug my-story --category World --title "My story" \
  --dek "One-sentence summary" --source Reuters --source-url https://example.com \
  --paragraph "First paragraph" --paragraph "Second paragraph"
"""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NEWS_FILE = ROOT / "data" / "news.json"

parser = argparse.ArgumentParser(description="Add a Worldline news article")
parser.add_argument("--slug", required=True)
parser.add_argument("--category", required=True)
parser.add_argument("--title", required=True)
parser.add_argument("--dek", required=True)
parser.add_argument("--source", required=True)
parser.add_argument("--source-url", required=True)
parser.add_argument("--date", default="July 17, 2026")
parser.add_argument("--read-time", default="4 min read")
parser.add_argument("--author", default="Worldline Desk")
parser.add_argument("--paragraph", action="append", required=True)
parser.add_argument("--point", action="append", default=[])
args = parser.parse_args()

stories = json.loads(NEWS_FILE.read_text(encoding="utf-8"))
if any(story["slug"] == args.slug for story in stories):
    raise SystemExit(f"A story with slug '{args.slug}' already exists.")

stories.append({
    "number": f"{len(stories) + 1:02d}",
    "slug": args.slug,
    "category": args.category,
    "title": args.title,
    "dek": args.dek,
    "date": args.date,
    "readTime": args.read_time,
    "author": args.author,
    "source": args.source,
    "sourceUrl": args.source_url,
    "paragraphs": args.paragraph,
    "keyPoints": args.point or [args.dek],
})
NEWS_FILE.write_text(json.dumps(stories, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(f"Added /news/{args.slug}")
