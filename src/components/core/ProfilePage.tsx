'use client';

import { motion, useAnimation } from 'framer-motion';
import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaInstagram } from 'react-icons/fa';

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

export default function ProfilePage() {
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
        <section ref={sectionRef} id="tentang-kami" className="relative sm:py-20 py-12 sm:px-8 px-4">
            <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 1 }}
                variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }}
                className="text-center text-primary sm:mb-12 mb-8 z-10"
            >
                <h1 className={`${tangerine.className} sm:text-6xl text-4xl mb-4 font-bold`}>Assalamualaikum Wr. Wb</h1>
                <p className="sm:text-lg text-sm">
                    Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
                </p>
            </motion.div>
            <div className="flex lg:flex-row flex-col justify-evenly items-center md:gap-32 gap-12 z-10">
                <div className="text-center text-primary">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1 }}
                        variants={contentVariants}
                        className="relative w-72 mx-auto mb-6"
                    >
                        <Image src={'/assets/img/flower-5.png'} alt="Flower" width={1000} height={1000} className="absolute w-44 -top-4 -left-6" />
                        <Image
                            src={'/assets/img/pendekatan.jpg'}
                            alt="Izza"
                            width={1000}
                            height={1000}
                            className="rounded-t-full border-8 border-primary"
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1 }}
                        variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                        className="text-center text-primary"
                    >
                        <h2 className={`${tangerine.className} md:text-8xl text-6xl font-bold`}>Izza</h2>
                        <p className={`${vidaloka.className} sm:text-4xl text-2xl text-tertiary mb-4`}>Binti Izatul Munthamimah</p>
                        <p className="sm:text-lg text-sm">Putri dari</p>
                        <p className="sm:text-lg text-sm">Bapak Abdul Aziz (Alm) & Ibu Siti Munawaroh</p>
                        <Link
                            href={'https://www.instagram.com/iizzatulmunthamimah_'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit mx-auto flex items-center justify-center mt-4 bg-primary text-secondary p-3 rounded-full transition duration-200 md:hover:bg-opacity-90"
                        >
                            <FaInstagram size={24} />
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                >
                    <Image src={'/assets/img/and.png'} alt="Izza & Risky" width={1000} height={1000} className="md:w-40 w-20" />
                </motion.div>
                <div className="text-center text-primary">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1 }}
                        variants={contentVariants}
                        className="relative w-72 mx-auto mb-6"
                    >
                        <Image
                            src={'/assets/img/flower-5.png'}
                            alt="Flower"
                            width={1000}
                            height={1000}
                            className="absolute w-44 -top-4 -right-6 transform scale-x-[-1]"
                        />
                        <Image
                            src={'/assets/img/lamaran.jpg'}
                            alt="Izza"
                            width={1000}
                            height={1000}
                            className="rounded-t-full border-8 border-primary"
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1 }}
                        variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                        className="text-center text-primary"
                    >
                        <h2 className={`${tangerine.className} md:text-8xl text-6xl font-bold`}>Risky</h2>
                        <p className={`${vidaloka.className} sm:text-4xl text-2xl text-tertiary mb-4`}>Risky Dwi Syah Putra</p>
                        <p className="sm:text-lg text-sm">Putra dari</p>
                        <p className="sm:text-lg text-sm">Bapak Asnan & Ibu Istiqomah</p>
                        <Link
                            href={'https://www.instagram.com/risky_putra09'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit mx-auto flex items-center justify-center mt-4 bg-primary text-secondary p-3 rounded-full transition duration-200 md:hover:bg-opacity-90"
                        >
                            <FaInstagram size={24} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
