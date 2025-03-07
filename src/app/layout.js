import { Geist, Geist_Mono, Raleway } from "next/font/google";
// import "rsuite/dist/rsuite-no-reset.min.css";
import "rsuite/dist/rsuite.min.css";
import "./globals.css";
import Script from "next/script";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `Beyond Renewables: Solar Panel Recycling for a Sustainable Future`,
  description: `Beyond Renewables specializes in solar panel recycling, turning waste into sustainable solutions. Join us in fostering a cleaner, greener future today!`,
  keywords: `Beyond Renewables,Solar Panel Recycling for a Sustainable Future`,
  author: `https://beyondrenewables.in`,
  icons: {
    icon: [{ url: "./favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C7NZNKWXPE"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-C7NZNKWXPE");
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.className} $ antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
