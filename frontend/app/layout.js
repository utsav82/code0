import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { MainNav } from "@/components/main-nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className + "min-h-screen bg-background"}
      >
        <header className="container z-40 bg-background">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
