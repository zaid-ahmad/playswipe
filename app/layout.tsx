import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "PlaySwipe - A Fun and Addictive Card Game",
    description:
        "PlaySwipe is an exciting card game combining skill & luck for 2-6 players. Perfect for game nights, family gatherings, or casual play!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
