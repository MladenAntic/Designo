import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { AppWrapper } from "@/components/PageWrapper";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designo",
  description: "Award winning custom designs and digital branding solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
