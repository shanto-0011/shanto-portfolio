import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import CurvedNavbar from "./components/CurvedNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD. SHANTO",
  description: "Shanto is a Full stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          bg-base-100 text-base-content static top-0 left-0 w-full h-full`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <CurvedNavbar />
            <main className="p-3 md:p-2 lg:p-3 relative">
            <Theme>{children}</Theme>
            </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
