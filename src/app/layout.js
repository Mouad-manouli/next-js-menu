import localFont from "next/font/local";
import "./globals.css";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
      'template' : '%s |  product '
  },
  description: "Product list description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-black text-white text-center p-5">
            ____________________Header_______________________
        </header>
        {children}
        <footer className="bg-black text-white text-center p-5">
            ____________________Footer_______________________
        </footer>
      </body>
    </html>
  );
}
