import Head from "next/head";
import {ReactNode} from "react";
import SEOJsonLd from "@/components/SEOJsonLd";

export default function Layout({children}: { children: ReactNode }) {
    const URL = "https://tristatestoneprotection.com"; // TODO update
    return (
        <>
            <Head>
                <title>Tristate Stone Protection | MORE™ AntiEtch™ Specialists</title>
                <meta
                    name="description"
                    content="Protect marble and other stones from etching & staining. MORE™ AntiEtch™ application and custom stone installations. Serving the Tri‑State area."
                />
                <link rel="canonical" href={URL}/>
                <meta property="og:title" content="Tristate Stone Protection"/>
                <meta
                    property="og:description"
                    content="MORE™ AntiEtch™ specialists & custom stone installations in the Tri‑State area."
                />
                <meta property="og:url" content={URL}/>
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <SEOJsonLd/>
            <main className="min-h-screen flex flex-col bg-white text-black scroll-smooth">{children}</main>
            <footer className="mt-auto py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Tristate Stone Protection
            </footer>
        </>
    );
}

