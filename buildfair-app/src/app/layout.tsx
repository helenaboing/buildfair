import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "🛠️ BuildFair | Smart Construction Agreements",
  description:
    "BuildFair—your smart contract solution for secure, transparent, and fair construction agreements between buyers, sellers, and jurors.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "🛠️ BuildFair | Smart Construction Agreements",
    description:
      "Secure, transparent, and fair construction agreements powered by smart contracts",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-background min-h-screen antialiased">
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
