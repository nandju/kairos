import type { Metadata } from "next";
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

export const metadata: Metadata = {
  title: "kairos dashboard",
  description: "vtc transport",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </>
  );
}
