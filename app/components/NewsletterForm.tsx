"use client";

import { FormEvent, useState } from "react";

type Props = { lang: "en" | "ar" };

const copy = {
  en: {
    label: "Email address",
    placeholder: "you@example.com",
    button: "Email me today’s brief",
    sending: "Sending…",
    idle: "A real news email, sent securely through Gmail. No password is stored in this page.",
    success: "Check your inbox — today’s Worldline brief is on its way.",
    error: "The brief could not be sent. Please try again in a moment.",
  },
  ar: {
    label: "البريد الإلكتروني",
    placeholder: "you@example.com",
    button: "أرسل موجز اليوم إلى بريدي",
    sending: "جارٍ الإرسال…",
    idle: "رسالة أخبار حقيقية تُرسل بأمان عبر Gmail. لا تُحفظ كلمة المرور في الصفحة.",
    success: "تحقق من بريدك — موجز وورلدلاين اليوم في الطريق.",
    error: "تعذر إرسال الموجز. حاول مرة أخرى بعد قليل.",
  },
};

export default function NewsletterForm({ lang }: Props) {
  const text = copy[lang];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          company: data.get("company"),
          lang,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result?.error || "Send failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="signup-form" onSubmit={submit}>
      <label htmlFor={`newsletter-email-${lang}`}>{text.label}</label>
      <div>
        <input
          id={`newsletter-email-${lang}`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={text.placeholder}
          maxLength={254}
          required
        />
        <input
          className="signup-honeypot"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? text.sending : text.button} <span>{lang === "ar" ? "←" : "→"}</span>
        </button>
      </div>
      <small className={`signup-status ${status}`} aria-live="polite">
        {status === "success" ? text.success : status === "error" ? text.error : text.idle}
      </small>
    </form>
  );
}
