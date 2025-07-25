import {antiEtchBenefits} from "@/data/site";

export default function AntiEtch() {
    return (
        <section id="anti-etch" className="scroll-mt-24 px-6 py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">MORE™ AntiEtch™</h2>
                <p className="mb-8 max-w-3xl text-gray-700 leading-relaxed">
                    MORE™ AntiEtch™ stops etching and staining caused by acidic foods and liquids. It forms a durable,
                    ultra‑low visibility coating on marble and other acid‑sensitive stones—so your surfaces stay
                    beautiful.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 list-disc list-inside">
                    {antiEtchBenefits.map((b) => (
                        <li key={b}>{b}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

