import {services} from "@/data/site";

export default function Services() {
    return (
        <section
            id="services"
            className="scroll-mt-24 px-6 py-20 max-w-6xl mx-auto"
        >
            <h2 className="text-3xl font-semibold mb-10">What We Do</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {services.map((s) => (
                    <div key={s.title} className="border p-6 bg-white">
                        <h3 className="font-medium text-xl mb-2">{s.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

