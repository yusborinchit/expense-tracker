import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "~/components/header";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "A simple expense tracker app built with the T3 stack.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-background text-foreground">
        <Header />
        {children}
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-background">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
      </body>
    </html>
  );
}
