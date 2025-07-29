import {services} from "@/data/site";
import {useEffect, useRef, useState} from "react";

export default function Services() {
    const [tipOpen, setTipOpen] = useState(false);
    const tipRef = useRef<HTMLButtonElement | null>(null);

    /* close the tooltip if you click anywhere else */
    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (!tipRef.current?.contains(e.target as Node)) setTipOpen(false);
        };
        window.addEventListener("click", close);
        return () => window.removeEventListener("click", close);
    }, []);

    return (
        <section id="services" className="scroll-mt-16 px-6 py-20 bg-white">
            <h2 className="text-4xl font-semibold mb-10 text-center">What We Do</h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* left column – service list */}
                <div
                    className="min-h-[620px] px-10 py-12 flex flex-col justify-between shadow-sm sm:shadow-md rounded-lg gap-8">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="bg-white/70 rounded-lg shadow-md p-8 transition hover:shadow-lg text-center"
                        >
                            {s.title.startsWith("Serving") ? (
                                /* custom heading with tooltip */
                                <h3 className="text-xl font-semibold mb-2">
                                    Serving the{" "}
                                    <button
                                        ref={tipRef}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setTipOpen(!tipOpen);
                                        }}
                                        className="underline decoration-2 underline-offset-2 relative"
                                    >
                                        Tri‑State
                                        {tipOpen && (
                                            <span className="absolute -top-6 left-1/2 -translate-x-1/2
                                               whitespace-nowrap bg-black text-white text-xs
                                               px-2 py-1 rounded shadow-lg">
                                                (NY, NJ, CT)
                                            </span>
                                        )}
                                    </button>
                                    {" "}
                                    Area
                                </h3>
                            ) : (
                                <>
                                    <h3 className="text-xl font-semibold mb-2 tracking-tight group-hover:text-gray-900">{s.title}</h3>
                                </>
                            )}

                            <p className="text-base text-gray-600 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* right column – single portrait video */}
                <div className="relative w-full h-[840px] rounded shadow-lg overflow-hidden">
                    <video
                        src="/videos/installation.mp4"
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
}
