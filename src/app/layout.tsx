import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/css/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";
import { CountryDataProvider } from "@/context/CountryDataContext"; //contextを使って全ページでAPIからのデータを使用可能にする

const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['300', '600', '800'] }); //Google Fontsの「Nunito Sans」を読み込むための関数らしい

export const metadata: Metadata = {
  title: "Whrer is the World?",
  description: "国を検索してみよう - oneshi's FE Challenge -",
};

export default function RootLayout({ children }:{ children: React.ReactNode }) { //React.ReactNodeはReactコンポーネントが子要素（children）としてレンダリングできる全ての型
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />
        <CountryDataProvider>
          {children}
        </CountryDataProvider>
        <Footer />
      </body>
    </html>
  );
}
