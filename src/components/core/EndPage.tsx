'use client';

import { motion, useAnimation } from 'framer-motion';
import { Tangerine } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const contentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
};

export default function EndPage() {
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
            { threshold: 0.3 }
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
        <div ref={sectionRef} className="sm:gap-10 gap-6 sm:p-12 p-6">
            <div className="flex flex-col items-center justify-center text-center sm:gap-6 gap-4 sm:px-8 px-6 sm:pb-8 pb-24 pt-8 bg-primary border-8 border-secondary shadow-2xl h-full w-full sm:rounded-full rounded-full text-secondary">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }}
                    className="md:w-72 w-52 mx-auto mb-6"
                >
                    <Image
                        src={'/assets/img/izza.jpg'}
                        alt="Izza & Risky"
                        width={1000}
                        height={1000}
                        className="rounded-t-full border-8 border-secondary"
                    />
                </motion.div>
                <motion.p
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                    className="sm:text-lg text-sm"
                >
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan do&apos;a restunya untuk
                    pernikahan kami.
                </motion.p>
                <motion.p
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                    className="sm:text-lg text-sm"
                >
                    Atas do&apos;a dan restunya, kami ucapkan terima kasih.
                </motion.p>
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={contentVariants}
                    className={`${tangerine.className} sm:text-8xl text-6xl font-bold`}
                >
                    Izza & Risky
                </motion.h1>
            </div>
        </div>
    );
}
