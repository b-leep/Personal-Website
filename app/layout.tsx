import type { Metadata } from "next";
import "./globals.css";
import StarryBackground from "./StarryBackground";
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: "Othoi",
  description: "explore the stars",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-hidden">
        <StarryBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
