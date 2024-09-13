'use client';

import { motion, useAnimation } from 'framer-motion';
import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

const contentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
};

const descVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
};

export default function StoryPage() {
    const controls = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentRef = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                } else {
                    controls.start('hidden');
                }
            },
            { threshold: 0.2 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [controls]);

    return (
        <div ref={sectionRef} className="sm:p-12 p-6 bg-primary">
            <div className="text-center md:px-12 px-8 sm:py-12 py-8 bg-pattern border-8 border-primary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }}
                    className={`${tangerine.className} sm:text-8xl text-6xl md:mb-12 mb-6`}
                >
                    Love Story
                </motion.h1>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4 md:mb-8 mb-6">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1 }}
                        variants={contentVariants}
                        className="basis-1/3 mx-auto"
                    >
                        <Image src={'/assets/img/story.webp'} alt="Our Story" width={1000} height={1000} className="sm:rounded-2xl rounded-lg" />
                    </motion.div>
                    <div className="lg:text-left basis-2/3 text-center md:space-y-4 space-y-2">
                        <motion.h1
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className={`${vidaloka.className} sm:text-2xl text-lg`}
                        >
                            PERTEMUAN
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={descVariants}
                            className="sm:text-lg text-sm italic"
                        >
                            Tidak ada yang kebetulan di dunia ini. semua sudah tersusun rapi oleh sang maha kuasa, kita tidak bisa memilih kepada
                            siapa kita akan jatuh cinta, kami bertemu pada tahun 2015, tepatnya saat kami sedang menempuh pendidikan di sekolah
                            menengah yang sama, tidak ada yang pernah menyangka bahwa pertemuan itu membawa kami sejauh ini.
                        </motion.p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4 md:mb-8 mb-6">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1 }}
                        variants={contentVariants}
                        className="basis-1/3 mx-auto"
                    >
                        <Image src={'/assets/img/story.webp'} alt="Our Story" width={1000} height={1000} className="sm:rounded-2xl rounded-lg" />
                    </motion.div>
                    <div className="lg:text-left basis-2/3 text-center md:space-y-4 space-y-2">
                        <motion.h1
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className={`${vidaloka.className} sm:text-2xl text-lg`}
                        >
                            LAMARAN
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={descVariants}
                            className="sm:text-lg text-sm italic"
                        >
                            Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu kami semakin dekat, mulai 2018 kami cukup sering
                            berkomunikasi, bertemu, dan alam seakan terus berkonspirasi untuk menyatukan kami berdua.
                        </motion.p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4 md:mb-8 mb-6">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1 }}
                        variants={contentVariants}
                        className="basis-1/3 mx-auto"
                    >
                        <Image src={'/assets/img/story.webp'} alt="Our Story" width={1000} height={1000} className="sm:rounded-2xl rounded-lg" />
                    </motion.div>
                    <div className="lg:text-left basis-2/3 text-center md:space-y-4 space-y-2">
                        <motion.h1
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className={`${vidaloka.className} sm:text-2xl text-lg`}
                        >
                            PENDEKATAN
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={descVariants}
                            className="sm:text-lg text-sm italic"
                        >
                            Kehendaknya menuntun kami pada sebuah pertemuan yang tak pernah di sangka hingga akhirnya membawa kami pada sebuah ikatan
                            suci yang dicintai-Nya. kami melangsungkan acara lamaran di bulan Mei 2024 lalu.
                        </motion.p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1 }}
                        variants={contentVariants}
                        className="basis-1/3 mx-auto"
                    >
                        <Image src={'/assets/img/story.webp'} alt="Our Story" width={1000} height={1000} className="sm:rounded-2xl rounded-lg" />
                    </motion.div>
                    <div className="lg:text-left basis-2/3 text-center md:space-y-4 space-y-2">
                        <motion.h1
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className={`${vidaloka.className} sm:text-2xl text-lg`}
                        >
                            MENIKAH
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={descVariants}
                            className="sm:text-lg text-sm italic"
                        >
                            Kami memutuskan untuk mengikrarkan janji suci pernikahan di bulan ini. insyaAllah sebagaimana yang pernah dikatakan oleh
                            saydina Ali bin Abi Thalib &quot;Apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu&quot;.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
}
