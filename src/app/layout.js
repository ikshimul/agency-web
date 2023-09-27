import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "Home",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#269669"
          height={3}
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
