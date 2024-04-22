import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TODO APP",
  description: "Acaj0 todo-crud example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/list-check-solid.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
