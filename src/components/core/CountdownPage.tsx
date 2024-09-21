'use client';

import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { motion, useAnimation } from 'framer-motion';
import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

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

export default function CountdownPage() {
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

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

    useEffect(() => {
        const targetDate = new Date('2024-11-06T09:00:00+07:00');
        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };
        const intervalId = setInterval(updateCountdown, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section ref={sectionRef} className="flex justify-center items-center sm:p-16 p-6 bg-primary">
            <div className="flex flex-col items-center justify-center text-center gap-6 lg:px-52 sm:px-24 px-4 sm:py-12 py-8 bg-secondary border-8 border-primary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }}
                >
                    <Image src={'/assets/img/decoration.png'} alt="Flower" width={1000} height={1000} className="md:w-52 w-44 md:mb-6 mb-4" />
                </motion.div>
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={contentVariants}
                    className={`${tangerine.className} sm:text-6xl text-5xl font-bold`}
                >
                    We Found Love
                </motion.h1>
                <motion.p initial="hidden" animate={controls} transition={{ duration: 1 }} variants={contentVariants} className="sm:text-lg text-sm">
                    “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                    cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                    benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
                </motion.p>
                <motion.p initial="hidden" animate={controls} transition={{ duration: 1 }} variants={contentVariants} className="sm:text-lg text-sm">
                    (QS. Ar Rum : 21)
                </motion.p>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={contentVariants}
                    className="flex items-center gap-2 w-full"
                >
                    <hr className="grow border border-primary" />
                    <HiDotsHorizontal size={24} />
                    <hr className="grow border border-primary" />
                </motion.div>
                <div className="grid grid-cols-4 md:gap-4 gap-2 w-full text-secondary">
                    <div className="bg-primary sm:rounded-2xl rounded-lg md:p-6 p-4">
                        <motion.h3
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className={`${vidaloka.className} md:text-6xl text-2xl`}
                        >
                            {timeLeft.days}
                        </motion.h3>
                        <motion.p
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className="md:text-lg text-sm"
                        >
                            Hari
                        </motion.p>
                    </div>
                    <div className="bg-primary sm:rounded-2xl rounded-lg md:p-6 p-4">
                        <motion.h3
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className={`${vidaloka.className} md:text-6xl text-2xl`}
                        >
                            {timeLeft.hours}
                        </motion.h3>
                        <motion.p
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className="md:text-lg text-sm"
                        >
                            Jam
                        </motion.p>
                    </div>
                    <div className="bg-primary sm:rounded-2xl rounded-lg md:p-6 p-4">
                        <motion.h3
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className={`${vidaloka.className} md:text-6xl text-2xl`}
                        >
                            {timeLeft.minutes}
                        </motion.h3>
                        <motion.p
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className="md:text-lg text-sm"
                        >
                            Menit
                        </motion.p>
                    </div>
                    <div className="bg-primary sm:rounded-2xl rounded-lg md:p-6 p-4">
                        <motion.h3
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className={`${vidaloka.className} md:text-6xl text-2xl`}
                        >
                            {timeLeft.seconds}
                        </motion.h3>
                        <motion.p
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={contentVariants}
                            className="md:text-lg text-sm"
                        >
                            Detik
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                >
                    <AddToCalendarButton
                        name="Wedding of Izza & Risky"
                        options={['Apple', 'Google', 'Yahoo', 'Outlook.com']}
                        location="Ds. Blongko Kec. Ngetos Kab. Nganjuk"
                        startDate="2024-11-06"
                        startTime="09:00"
                        endTime="12:00"
                        timeZone="Asia/Jakarta"
                        buttonStyle="round"
                        label="Tambahkan ke Kalender"
                    ></AddToCalendarButton>
                </motion.div>
            </div>
        </section>
    );
}
