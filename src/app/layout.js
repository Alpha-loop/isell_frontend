// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Specify weights you need
  subsets: ['latin'], // Subsets for your language (latin is common)
  display: 'swap', // Ensures text is visible while font loads
});

export const metadata = {
  title: "isell Logistics",
  description: "description: 'Your shipping solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
