import {contactEmail, hero} from "@/data/site";

export default function Hero() {
    return (
        <section
            id="home"
            className="scroll-mt-24 px-6 pt-36 pb-24 text-center bg-gray-100"
        >
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                {hero.headline}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {hero.subheadline}
            </p>
            <a
                href={`mailto:${contactEmail}`}
                className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition"
            >
                {hero.cta}
            </a>
        </section>
    );
}

