// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Specify weights you need
  subsets: ['latin'], // Subsets for your language (latin is common)
  display: 'swap', // Ensures text is visible while font loads
});

export const metadata = {
  title: "isellLogistics",
  description: "A shipping web app created by Damilola Alaka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
