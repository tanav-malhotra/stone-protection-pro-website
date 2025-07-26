import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import "yet-another-react-lightbox/styles.css";
import Lightbox, {Slide} from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";

import {allMedia} from "@/data/site";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";

const isVideo = (src: string) =>
    src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");

export default function GalleryPage() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    /* Prepare slides for the light‑box (images + videos) */
    const slides: Slide[] = allMedia.map((m) =>
        isVideo(m.src)
            ? {
                type: "video",
                width: 1280,
                height: 720,
                sources: [{src: m.src, type: "video/mp4"}],
                poster: m.src + "#t=0.5", // quick first‑frame poster
            }
            : {src: m.src, alt: m.alt}
    );

    return (
        <Layout>
            <Nav/>

            <section className="pt-36 px-6 pb-24 max-w-7xl mx-auto">
                {/* back pill aligned left */}
                <Link
                    href="/#gallery"
                    scroll={false}
                    className="inline-flex items-center gap-2 bg-black text-white
             px-5 py-2 rounded-md hover:bg-gray-800"
                >
                    <span className="text-lg -ml-1">←</span> Back
                </Link>

                <h1 className="text-4xl font-bold my-12 text-center">
                    Imagine the Possibilities
                </h1>

                {/* big‑tile grid */}
                <div
                    className="grid gap-10
                     sm:grid-cols-1
                     lg:grid-cols-2
                     xl:grid-cols-3"
                >
                    {allMedia.map((m, i) =>
                        isVideo(m.src) ? (
                            <button
                                key={m.src}
                                onClick={() => {
                                    setIndex(i);
                                    setOpen(true);
                                }}
                                className="relative w-full rounded-2xl shadow-lg
                           overflow-hidden focus:outline-none cursor-zoom-in"
                            >
                                <video
                                    src={m.src}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ) : (
                            <button
                                key={m.src}
                                onClick={() => {
                                    setIndex(i);
                                    setOpen(true);
                                }}
                                className="group relative aspect-square w-full rounded-2xl
                           shadow-lg overflow-hidden focus:outline-none cursor-zoom-in"
                            >
                                <Image
                                    src={m.src}
                                    alt={m.alt}
                                    fill
                                    sizes="(min-width:1280px) 25vw,
                         (min-width:1024px) 33vw,
                         (min-width:640px) 50vw,
                         100vw"
                                    className="object-cover transition group-hover:scale-105"
                                />
                            </button>
                        )
                    )}
                </div>
            </section>

            {/* Light‑box */}
            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={slides}
                    plugins={[Zoom, Video]}
                    carousel={{finite: true}}
                    zoom={{maxZoomPixelRatio: 2}}
                    render={{buttonPrev: undefined, buttonNext: undefined}}
                />
            )}
        </Layout>
    );
}
