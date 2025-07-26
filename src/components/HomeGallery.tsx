import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import Lightbox, {Slide} from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import {featuredMedia} from "@/data/site";

export default function HomeGallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    /* slides = only the first 3 images */
    const slides: Slide[] = featuredMedia.map((f) => ({src: f.src, alt: f.alt}));

    return (
        <section id="gallery" className="scroll-mt-16 px-6 py-24">
            <h2 className="text-4xl font-bold mb-16 text-center">
                Imagine the Possibilities
            </h2>

            {/* -------- BIG 2×2 GRID -------- */}
            <div
                className="mx-auto max-w-[820px]          /* cap total width */
                   grid grid-cols-2 gap-10        /* 2 columns always */
                   place-content-center"
            >
                {/* first 3 clickable images */}
                {featuredMedia.map((img, i) => (
                    <button
                        key={img.src}
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                        className="group relative aspect-square w-full rounded-xl shadow-md
                       overflow-hidden cursor-zoom-in"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="410px"
                            className="object-cover transition group-hover:scale-105"
                        />
                    </button>
                ))}

                {/* blurred “view more” tile */}
                <Link
                    href="/gallery"
                    className="group relative aspect-square w-full flex items-center justify-center
                     overflow-hidden rounded-xl shadow-md"
                >
                    <Image
                        src="/images/bathroom4.jpg"
                        alt="View full gallery"
                        fill
                        sizes="410px"
                        className="object-cover filter blur-lg brightness-75
                       transition group-hover:blur-0 group-hover:brightness-65"
                    />
                    <span
                        className="relative z-10 text-white text-2xl font-semibold tracking-wide
                        before:absolute before:left-0 before:-bottom-1
                        before:h-[2px] before:w-0 before:bg-white
                        before:transition-all before:duration-300
                        group-hover:before:w-full"
                    >
                    View&nbsp;More&nbsp;→
                  </span>
                </Link>
            </div>

            {/* Light‑box renders only when open */}
            {open && (
                <Lightbox
                    open
                    index={index}
                    close={() => setOpen(false)}
                    slides={slides}
                    plugins={[Zoom]}
                    zoom={{maxZoomPixelRatio: 2}}
                />
            )}

            {/*/!* Mobile‑only button if you still want one *!/*/}
            {/*<div className="text-center mt-12 lg:hidden">*/}
            {/*    <Link*/}
            {/*        href="/gallery"*/}
            {/*        className="inline-block px-8 py-3 border border-black*/}
            {/*         hover:bg-black hover:text-white transition*/}
            {/*         rounded-md"*/}
            {/*    >*/}
            {/*        View&nbsp;More&nbsp;→*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </section>
    );
}
