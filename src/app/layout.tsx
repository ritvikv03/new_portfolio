import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StarfieldBackground } from "@/components/starfield-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritvik Vasikarla | Data Scientist & ML Engineer | Austin, TX",
  description:
    "MSBA candidate and ML/Data Engineer building production-grade AI pipelines, predictive models, and data systems. 2× competition winner. Open to US Data Science, ML Engineering, and Data Engineering roles.",
  keywords: [
    "Data Scientist",
    "ML Engineer",
    "Data Engineer",
    "Machine Learning",
    "LangChain",
    "Snowflake",
    "dbt",
    "XGBoost",
    "Python",
    "Austin TX",
    "MSBA",
    "UW-Madison",
  ],
  authors: [{ name: "Ritvik Vasikarla", url: "https://ritvikv03.vercel.app" }],
  openGraph: {
    title: "Ritvik Vasikarla — ML & Data Engineer",
    description:
      "MSBA candidate. 2× competition winner. Building AI pipelines and predictive models. Open to US Data Science, ML, and Data Engineering roles.",
    url: "https://ritvikv03.vercel.app",
    siteName: "Ritvik Vasikarla Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritvik Vasikarla — ML & Data Engineer",
    description:
      "MSBA candidate. 2× competition winner. Building AI pipelines and predictive models. Open to US roles.",
    creator: "@ritvikv03",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} antialiased bg-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StarfieldBackground />
          <div className="relative z-10 min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
