import Head from "next/head";
import {contactEmail} from "@/data/site";

export default function SEOJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Tristate Stone Protection",
        description:
            "MORE™ AntiEtch™ application and custom stone installations for marble and other stones in the Tri‑State area.",
        areaServed: "New York, New Jersey, Connecticut",
        email: contactEmail,
        url: "https://tristatestoneprotection.com",
        serviceType: [
            "Stone protection",
            "MORE AntiEtch application",
            "Custom stone installation",
        ],
    };
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
            />
        </Head>
    );
}

