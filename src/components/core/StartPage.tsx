'use client';

import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { motion, useAnimation } from 'framer-motion';
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

export default function StartPage() {
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
            { threshold: 0.5 }
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
        <section
            id="home"
            ref={sectionRef}
            className="relative flex flex-col items-center sm:gap-3 gap-2 pt-40 bg-pattern text-center w-full pb-72 -z-10"
        >
            <Image src={'/assets/img/flower-1.png'} alt="Flower" width={1000} height={1000} className="absolute top-0 sm:w-1/2 " />
            <Image
                src={'/assets/img/flower-2.png'}
                alt="Flower"
                width={1000}
                height={1000}
                className="absolute top-0 left-0 lg:w-1/4 sm:w-1/3 w-1/2"
            />
            <Image
                src={'/assets/img/flower-3.png'}
                alt="Flower"
                width={1000}
                height={1000}
                className="absolute top-0 right-0 lg:w-1/4 sm:w-1/3 w-1/2"
            />

            <div className="text-primary space-y-6 z-10">
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={contentVariants}
                    className={`${vidaloka.className} md:text-2xl text-lg tracking-widest`}
                >
                    THE WEDDING OF
                </motion.h1>
                <motion.h2
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={contentVariants}
                    className={`${tangerine.className} md:text-8xl text-6xl font-bold`}
                >
                    Izza & Risky
                </motion.h2>
                <motion.h3
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={contentVariants}
                    className={`${vidaloka.className} md:text-2xl text-lg`}
                >
                    06 . 11 . 2024
                </motion.h3>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={contentVariants}
                    className="mx-auto border border-primary w-8 h-12 rounded-full flex items-end justify-center"
                >
                    <IoIosArrowRoundDown size={30} className="animate-bounce" />
                </motion.div>
            </div>

            <Image
                src={'/assets/img/castle.png'}
                alt="Castle"
                width={1000}
                height={1000}
                className="absolute sm:opacity-60 xl:-bottom-44 md:-bottom-24 -bottom-12 md:w-1/2"
            />
        </section>
    );
}
