import "./globals.css"
import localFont from "next/font/local"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import { ThemeContextProvider } from "@/context/ThemeContext"
import ThemeProvider from "@/providers/ThemeProvider"

// Define a local font
// NOTE: Require licensing for commercial use
const myFont = localFont({
    src: "../antiqua-2-cufonfonts/Book Antiqua.ttf",
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
