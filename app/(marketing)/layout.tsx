import Footer from "@/components/home/footer/footer";
import Head from "@/components/home/navbar/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "kairos",
  description: "vtc transport",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Head/>
          {children}
        <Footer/>
      </>
  );
}


