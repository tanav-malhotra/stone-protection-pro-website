import Head from "next/head";
import {ReactNode} from "react";
import SEOJsonLd from "@/components/SEOJsonLd";
import {URL} from "@/data/site";

export default function Layout({children}: { children: ReactNode }) {
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


            {/* original footer */}
            {/*<footer className="mt-auto py-6 text-center text-sm text-gray-300">*/}
            {/*    Copyright*/}
            {/*    © {new Date().getFullYear() > 2025 ? `2025-${new Date().getFullYear()}` : new Date().getFullYear()} Tristate*/}
            {/*    Stone Protection · All Rights Reserved*/}
            {/*</footer>*/}

            <footer className="mt-auto border-t bg-gray-950 text-gray-300 text-sm">
                <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row
                  items-center justify-between gap-4">
                    {/* copy block */}
                    <p className="text-center sm:text-left">
                        Copyright © {new Date().getFullYear() > 2025
                        ? `2025–${new Date().getFullYear()} `
                        : "2025 "}
                        Tristate Stone Protection · All Rights Reserved
                    </p>

                    {/* quick contact */}
                    <a
                        href="mailto:stoneprotection21@gmail.com"
                        className="underline hover:text-white"
                    >
                        stoneprotection21@gmail.com
                    </a>
                </div>

                {/* optional credit strip for discount */}
                <div className="py-2 text-center text-xs bg-gray-800 text-gray-300">
                    Website designed and built by {" "}
                    <a
                        href="https://www.linkedin.com/in/tanav-malhotra/"
                        className="underline hover:text-white"
                        target="_blank"
                    >
                        Tanav Malhotra
                    </a>
                </div>
            </footer>
        </>
    );
}

