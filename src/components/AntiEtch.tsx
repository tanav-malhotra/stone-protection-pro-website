import {antiEtchBenefits} from "@/data/site";
import {CheckCircleIcon} from "@heroicons/react/24/solid";

export default function AntiEtch() {
    // Split benefits into 2 roughly equal columns
    const mid = Math.ceil(antiEtchBenefits.length / 2);
    const cols = [antiEtchBenefits.slice(0, mid), antiEtchBenefits.slice(mid)];

    return (
        <section
            id="anti-etch"
            className="scroll-mt-16 px-6 py-24 bg-gray-50 text-center"
        >
            <h2 className="text-4xl font-bold mb-8">MORE™ AntiEtch™</h2>

            <p className="mb-16 max-w-3xl mx-auto text-gray-700 leading-relaxed">
                MORE™ AntiEtch™ stops etching and staining caused by acidic foods and
                liquids. It forms a durable, ultra‑low‑visibility coating on marble and
                other acid‑sensitive stones—so your surfaces stay beautiful.
            </p>

            {/* benefit list */}
            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-x-8 gap-y-6 place-items-center">
                {cols.map((col, i) => (
                    <ul key={i} className="space-y-4 text-left">
                        {col.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-[2px] shrink-0"/>
                                <span className="text-gray-800">{item}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
}
