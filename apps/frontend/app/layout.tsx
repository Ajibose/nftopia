//
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { CircuitBackground } from "@/components/circuit-background";

const inter = Inter({ subsets: ["latin"] });
const fallbackFont = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NFTopia - NFT Marketplace",
  description: "Discover, collect, and sell extraordinary NFTs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-[#0f0c38] via-[#181359] to-[#241970] text-white relative">
          <main className="relative z-10">
            <Navbar />
            <CircuitBackground />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
