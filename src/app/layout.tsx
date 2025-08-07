import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

export const metadata: Metadata = {
  title: "오정환 개발자 포트폴리오",
  description: "풀스택 개발자 오정환 포트폴리오 입니다.",
  icons: {
    icon: "imgs/fe.ico"
  }
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
					<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />) : null}
        {modal}
        {children}  
        </body>
      <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
          strategy="afterInteractive"
        />
    </html>
  );
}
