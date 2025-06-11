import { Geist } from "next/font/google";
import "@/app/styles/global.css";
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],

});

const SITE_URL = "https://sobjar.org/";
const BANNER_URL = "https://raw.githubusercontent.com/DarknessMonarch/sobjar/refs/heads/master/public/assets/banner.png";

export const viewport = {
  themeColor: "#233f96",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sobjar",
    template: "%s , sobjar"
  },
  applicationName: "Sobjar",
  description: "Taking care of our youths",
  authors: [{ name: "sobjar", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "Sobjar",
    "NGO",
    "Youths",
    "Donations"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sobjar",
    description: "Taking care of our youths",
    url: SITE_URL,
    siteName: "Sobjar",
    images: [{
      url: BANNER_URL,
      width: 1200,
      height: 630,
      alt: "sobjar Banner"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobjar",
    description: "Taking care of our youths",
    images: [BANNER_URL],
    creator: "@sobjar"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/favicon.ico"
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <Toaster
          position="top-center"
          richColors={true}
          toastOptions={{
            style: {
              background: "#009077",
              color: "#ffffff",
              borderRadius: "15px",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
