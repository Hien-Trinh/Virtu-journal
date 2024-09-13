import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { ThemeContextProvider } from "@/context/ThemeContext"
import ThemeProvider from "@/providers/ThemeProvider"
import localFont from "next/font/local"
import Script from "next/script"
import "./globals.css"

// Define a local font
// NOTE: Require licensing for commercial use
const myFont = localFont({
    src: "../../public/fonts/antiqua-2-cufonfonts/bookantiqua.ttf",
    display: "swap",
})

// Define metadata
export const metadata = {
    title: "Virtù",
    description: "David is the best.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {
                            dataLayer.push(arguments);
                        }
                        gtag("js", new Date());
                        gtag("config", "${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}");
                    `}
                </Script>
            </head>
            <body className={myFont.className}>
                <ThemeContextProvider>
                    <ThemeProvider>
                        <div className="container">
                            <div className="wrapper">
                                <Navbar />
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </ThemeProvider>
                </ThemeContextProvider>
            </body>
        </html>
    )
}
