'use client';

import { Tangerine } from 'next/font/google';
import { Suspense, useEffect, useState } from 'react';
import { IoMailOpenOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const contentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
};

function RecipientName() {
    const searchParams = useSearchParams();
    const recipientName = searchParams.get('to') || 'penerima';
    return <span>{recipientName}</span>;
}

const Image = dynamic(() => import('next/image'), { suspense: true });

export default function CoverPage({ toggleAudio }: { toggleAudio: () => void }) {
    const [isCoverVisible, setIsCoverVisible] = useState(true);

    const handleOpenInvitation = () => {
        setIsCoverVisible(false);
        toggleAudio();
    };

    useEffect(() => {
        if (isCoverVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isCoverVisible]);

    return (
        <div
            className={`fixed inset-0 h-screen sm:p-8 p-4 bg-pattern transition-transform duration-700 overflow-hidden z-50 ${
                isCoverVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="flex flex-col justify-center items-center sm:gap-3 gap-2 p-5 bg-white shadow-lg text-center rounded-full bg-opacity-80 h-full w-full">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }}
                    className="absolute top-0 sm:w-1/2"
                >
                    <Image src={'/assets/img/flower-1.png'} alt="Flower 1" width={1000} height={1000} />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }}
                    className="absolute top-0 left-0 lg:w-1/4 sm:w-1/3 w-1/2"
                >
                    <Image src={'/assets/img/flower-2.png'} alt="Flower 2" width={1000} height={1000} />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }}
                    className="absolute top-0 right-0 lg:w-1/4 sm:w-1/3 w-1/2"
                >
                    <Image src={'/assets/img/flower-3.png'} alt="Flower 3" width={1000} height={1000} />
                </motion.div>

                <motion.div initial="hidden" animate="visible" transition={{ duration: 1 }} variants={contentVariants} className="sm:w-44 w-28">
                    <Image src={'/assets/img/jewerly.png'} alt="Izza & Risky" width={500} height={500} />
                </motion.div>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8 }}
                    variants={contentVariants}
                    className="md:text-lg tracking-widest"
                >
                    WEDDING INVITATION
                </motion.h1>
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8 }}
                    variants={contentVariants}
                    className={`${tangerine.className} md:text-8xl text-6xl font-bold sm:mb-6 mb-3 text-primary`}
                >
                    Izza & Risky
                </motion.h2>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8 }}
                    variants={contentVariants}
                    className="md:text-base sm:text-sm text-xs"
                >
                    Kepada Yth. Bapak/Ibu/Saudara/i :
                </motion.p>

                <motion.h3
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8 }}
                    variants={contentVariants}
                    className="text-xl font-bold uppercase"
                >
                    <Suspense fallback={<span>Loading...</span>}>
                        <RecipientName />
                    </Suspense>
                </motion.h3>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8 }}
                    variants={contentVariants}
                    className="md:text-sm text-xs italic"
                >
                    *mohon maaf bila ada kesalahan penulisan nama dan gelar
                </motion.p>
                <motion.button
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8 }}
                    variants={contentVariants}
                    onClick={handleOpenInvitation}
                    className="flex gap-2 items-center justify-center mt-2 bg-primary text-white md:text-base text-sm py-2 px-4 rounded-full transition duration-200 md:hover:bg-opacity-90"
                >
                    <IoMailOpenOutline size={20} />
                    <p>Buka Undangan</p>
                </motion.button>

                <Image
                    src={'/assets/img/castle.png'}
                    alt="Castle"
                    width={1000}
                    height={1000}
                    className="absolute xl:-bottom-44 md:-bottom-24 -bottom-12 -z-10 md:w-1/2"
                />
            </div>
        </div>
    );
}
