import { Geist, Geist_Mono } from "next/font/google";
// import "rsuite/dist/rsuite-no-reset.min.css";
import "rsuite/dist/rsuite.min.css";
import "./globals.css";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
