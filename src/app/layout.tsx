import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Саид Газиев",
    description: "Frontend-разработчик React, Next.js",
    openGraph: {
        title: "Саид Газиев",
        description: "Frontend-разработчик React, Next.js",
        images: [{url: "https://gaziev-s.ru/portfolio-image.jpg"}],
        url: "https://gaziev-s.ru",
        type: "website",
        locale: "ru_RU"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
