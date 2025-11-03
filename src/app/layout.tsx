import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";


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

                <Suspense>
                    <>
                        <Script type="text/javascript" id="id">
                            {`(function(m,e,t,r,i,k,a){
                                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105075784', 'ym');
                            ym(105075784, 'init', {ssr:true, webvisor:true, defer: true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
                            `}
                        </Script>
                        <noscript><div><img src="https://mc.yandex.ru/watch/105075784" style={{position: "absolute", left: "-9999px"}} alt="" /></div></noscript>
                    </>
                </Suspense>
            </body>
        </html>
    );
}
