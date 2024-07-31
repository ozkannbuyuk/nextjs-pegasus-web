import type { Metadata } from "next";

import "./globals.css";

import ReduxProvider from "./provider/ReduxProvider";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Pegasus",
  description: "Pegasus",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
