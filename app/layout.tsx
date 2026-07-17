import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Worldline — News in Perspective",
  description: "Independent stories, global context, and ideas worth your time.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
