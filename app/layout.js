import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FileSure Assignment",
  description: "Develop provided landing page using Next.js, TailwindCSS, and ShadCN component library. The landing page should demonstrate your skills in frontend   development, design, and SEO optimization.",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
