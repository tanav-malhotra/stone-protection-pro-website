import {contactEmail, hero} from "@/data/site";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative scroll-mt-24 pt-56 pb-40 text-center text-white overflow-hidden"
        >
            {/* Background video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dimming overlay */}
            <div className="absolute inset-0 bg-black/50"/>

            {/* Headline, sub‑text, CTA */}
            <div className="relative z-10 px-6">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                    {hero.headline}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    {hero.subheadline}
                </p>

                <a
                    href={`mailto:${contactEmail}`}
                    className="inline-block px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-md"
                >
                    {hero.cta}
                </a>

                {/* tiny email subtitle */}
                <br/>
                <p className="mt-3 text-sm text-white/90">
                    {contactEmail}
                </p>
            </div>
        </section>
    );
}

