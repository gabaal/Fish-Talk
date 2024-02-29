import { Inter } from "next/font/google";
import Nav from "@/components/Nav"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fish Talk",
  description: "A website dedicated to chat about tropical fish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        </body>
    </html>
  );
}
