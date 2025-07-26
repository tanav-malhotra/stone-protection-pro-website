import {services} from "@/data/site";

export default function Services() {
    return (
        <section id="services" className="scroll-mt-16 px-6 py-20 bg-white">
            <h2 className="text-4xl font-semibold mb-10 text-center">What We Do</h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* left column – service list */}
                {/*<div className="h-[840px] px-10 py-12 flex flex-col justify-between bg-white shadow-sm">*/}
                {/*    {services.map((s) => (*/}
                {/*        <div key={s.title}>*/}
                {/*            <h3 className="font-medium text-lg mb-1">{s.title}</h3>*/}
                {/*            <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="h-[620px] px-10 py-12 flex flex-col justify-between shadow-sm">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="group px-1 py-8 border-b cursor-default
                                     transition hover:bg-gray-50"
                        >
                            <h3
                                className="text-xl font-semibold mb-2 tracking-tight
                                       group-hover:text-gray-900"
                            >
                                {s.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{s.desc}</p>
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
