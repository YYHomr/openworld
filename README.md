# Worldline News

A responsive editorial news site with ten current stories and one automatically generated page per article.

## Run locally

```bash
npm install
npm run dev
```

## Add another article

```bash
python scripts/add-news.py --slug example --category World --title "Headline" --dek "Summary" --source Reuters --source-url "https://example.com" --paragraph "First paragraph" --paragraph "Second paragraph"
```

The article appears automatically at `/news/example`.


## Gaza editorial series

Five opinion and analysis essays live at `/gaza`. Their content, photography credits and chart sources are stored in `data/gaza.json`.
