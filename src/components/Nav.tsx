export default function Nav() {
    const links = [
        {href: "#home", label: "Home"},
        {href: "#services", label: "Services"},
        {href: "#anti-etch", label: "MORE™ AntiEtch™"},
    ];

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                <span className="font-semibold">Tristate Stone Protection</span>
                <ul className="flex gap-6 text-sm">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="hover:text-gray-700">
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

