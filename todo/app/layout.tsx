import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Provider from "./_providers/QueryProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App to maximize your productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
