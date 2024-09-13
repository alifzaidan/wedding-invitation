'use client';

import { Tangerine } from 'next/font/google';
import dynamic from 'next/dynamic';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const WishForm = dynamic(() => import('../ui/WishForm'), { ssr: false });
const WishList = dynamic(() => import('../ui/WishList'), { ssr: false });

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const contentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
};

export default function WishesPage() {
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
        <div ref={sectionRef} id="ucapan" className="sm:p-12 p-6 bg-primary">
            <div className="text-center md:px-12 px-2 sm:py-12 py-8 bg-pattern border-8 border-primary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }}
                    className={`${tangerine.className} sm:text-8xl text-6xl`}
                >
                    Best Wishes
                </motion.h1>
                <motion.p
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }}
                    className="sm:text-lg text-sm lg:px-32 mt-2 mb-4"
                >
                    Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa jabatan-jabatan tangan atau pelukan-pelukan hangat, masih ada
                    simpul-simpul senyum dan doa-doa baik yang kami harapkan.
                </motion.p>

                <motion.div initial="hidden" animate={controls} transition={{ duration: 1 }} variants={contentVariants} className="w-full">
                    <WishForm />
                </motion.div>

                <motion.div initial="hidden" animate={controls} transition={{ duration: 1 }} variants={contentVariants} className="w-full">
                    <WishList />
                </motion.div>
            </div>
        </div>
    );
}
