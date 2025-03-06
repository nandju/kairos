import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "kairos auth",
  description: "vtc transport",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <>{children}</>
  );
}


