import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

export default function Nav() {
    const links = [
        {href: "/#services", label: "Services"},
        {href: "/#anti-etch", label: "MORE™ AntiEtch™"},
        {href: "/#gallery", label: "Gallery"},
    ];

    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white border-b">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5">
                {/* logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={180} height={54} priority/>
                </Link>

                {/* desktop menu */}
                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    {links.map(({href, label}) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-md hover:bg-gray-100"
                >
                    {open ? (
                        <XMarkIcon className="h-6 w-6"/>
                    ) : (
                        <Bars3Icon className="h-6 w-6"/>
                    )}
                </button>
            </nav>

            {/* mobile dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out pb-3
              ${open ? "max-h-104 opacity-100 duration-500" : "max-h-0 opacity-0 duration-450"}`}
            >
                <ul className="bg-white mx-4 mt-2 rounded-lg shadow-lg">
                    {links.map(({href, label}) => (
                        <li key={href}>
                            <Link
                                href={href}
                                onClick={() => setOpen(false)}
                                className="block px-5 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

