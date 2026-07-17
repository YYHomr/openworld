import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import news from "../../../data/news.json";
import newsAr from "../../../data/news-ar.json";

export const runtime = "nodejs";

type Attempt = { count: number; resetAt: number };
const attempts = new Map<string, Attempt>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_SENDS = 3;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (current.count >= MAX_SENDS) return true;
  current.count += 1;
  return false;
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === request.nextUrl.host;
  } catch {
    return false;
  }
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (character) => entities[character] || character);
}

function digest(lang: "en" | "ar") {
  const stories = (lang === "ar" ? newsAr : news).slice(0, 5);
  const base = process.env.SITE_URL || "https://openworld-peach.vercel.app";
  const prefix = lang === "ar" ? "/ar" : "";
  const direction = lang === "ar" ? "rtl" : "ltr";
  const title = lang === "ar" ? "موجز وورلدلاين اليوم" : "Your Worldline brief";
  const intro = lang === "ar"
    ? "خمس قصص أساسية من وورلدلاين، مع روابط إلى أحدث أخبار الذكاء الاصطناعي وفلسطين وغزة."
    : "Five essential Worldline stories, plus live AI reporting and our Palestine and Gaza desks.";
  const read = lang === "ar" ? "اقرأ القصة" : "Read the story";
  const links = lang === "ar"
    ? [["أخبار AI المباشرة", "/ar/ai"], ["قصة فلسطين", "/ar/palestine"], ["مدونة غزة", "/ar/gaza"]]
    : [["Live AI news", "/ai"], ["Palestine: the story", "/palestine"], ["Gaza essays", "/gaza"]];

  const storyHtml = stories.map((story, index) => `
    <tr><td style="padding:22px 0;border-top:1px solid #d8d2c4">
      <div style="font:700 10px Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#c64832">${String(index + 1).padStart(2, "0")} · ${escapeHtml(story.category)}</div>
      <h2 style="font:500 24px/1.15 Georgia,serif;margin:9px 0 12px;color:#11110f">${escapeHtml(story.title)}</h2>
      <a href="${base}${prefix}/news/${encodeURIComponent(story.slug)}" style="font:700 10px Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#11110f">${read} →</a>
    </td></tr>`).join("");

  const textStories = stories.map((story, index) =>
    `${index + 1}. ${story.title}\n${base}${prefix}/news/${story.slug}`
  ).join("\n\n");

  return {
    subject: lang === "ar" ? "موجز وورلدلاين: قصص اليوم الأساسية" : "Worldline: today’s essential stories",
    text: `${title}\n\n${intro}\n\n${textStories}\n\n${links.map(([label, path]) => `${label}: ${base}${path}`).join("\n")}`,
    html: `<!doctype html><html dir="${direction}" lang="${lang}"><body style="margin:0;background:#f1eddf;color:#11110f"><table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" style="padding:30px 14px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#fbfaf5;border:1px solid #d8d2c4"><tr><td style="padding:34px 38px 28px"><div style="font:900 20px Arial,sans-serif;letter-spacing:-1px">WORLD<span style="font-weight:400">LINE</span><span style="color:#d34a31">.</span></div><h1 style="font:500 48px/.95 Georgia,serif;letter-spacing:-.04em;margin:42px 0 18px">${title}</h1><p style="font:17px/1.6 Georgia,serif;color:#555047;margin:0 0 34px">${intro}</p><table role="presentation" width="100%" cellspacing="0" cellpadding="0">${storyHtml}</table><div style="margin-top:30px;padding:24px;background:#11110f;color:#fff"><div style="font:700 10px Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#ef654f;margin-bottom:15px">${lang === "ar" ? "استكشف المزيد" : "Explore more"}</div>${links.map(([label, path]) => `<a href="${base}${path}" style="display:block;color:#fff;font:17px/1.8 Georgia,serif">${label} ↗</a>`).join("")}</div><p style="font:11px/1.5 Arial,sans-serif;color:#777167;margin:28px 0 0">${lang === "ar" ? "طلبت هذا الموجز من موقع وورلدلاين. لم نُضف بريدك إلى قائمة تسويق." : "You requested this brief from Worldline. Your address was not added to a marketing list."}</p></td></tr></table></td></tr></table></body></html>`,
  };
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  }

  let body: { email?: unknown; company?: unknown; lang?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const lang = body.lang === "ar" ? "ar" : "en";
  if (!email || email.length > 254 || !EMAIL.test(email)) {
    return NextResponse.json({ error: lang === "ar" ? "أدخل بريداً إلكترونياً صحيحاً." : "Enter a valid email address." }, { status: 400 });
  }

  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ error: lang === "ar" ? "طلبات كثيرة. حاول بعد ساعة." : "Too many requests. Try again in an hour." }, { status: 429 });
  }

  const user = process.env.GMAIL_USER;
  const password = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (!user || !password) {
    console.error("Newsletter mail environment is not configured.");
    return NextResponse.json({ error: lang === "ar" ? "خدمة البريد غير متاحة مؤقتاً." : "Mail service is temporarily unavailable." }, { status: 503 });
  }

  const message = digest(lang);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: password },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    await transporter.sendMail({
      from: `Worldline Journal <${user}>`,
      to: email,
      replyTo: user,
      subject: message.subject,
      text: message.text,
      html: message.html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter send failed.", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: lang === "ar" ? "تعذر إرسال البريد الآن." : "The email could not be sent right now." }, { status: 502 });
  }
}
