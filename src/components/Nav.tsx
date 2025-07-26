import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const links = [
        {href: "/#services", label: "Services"},
        {href: "/#anti-etch", label: "MORE™ AntiEtch™"},
        {href: "/#gallery", label: "Gallery"},
    ];

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white border-b">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5">
                {/* logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Tristate Stone Protection Logo"
                        width={180}
                        height={54}
                        priority
                    />
                </Link>

                {/* nav links */}
                <ul className="flex gap-6 text-sm font-medium">
                    {links.map(({href, label}) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="px-4 py-2 rounded-md transition
                           hover:bg-gray-100 hover:text-black
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
