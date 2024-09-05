'use client';

import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default function CountdownPage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

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
        <div className="flex justify-center items-center sm:p-16 p-6 bg-primary">
            <div className="flex flex-col items-center justify-center text-center gap-6 lg:px-52 sm:px-24 px-4 sm:py-12 py-8 bg-secondary h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <div className="">
                    <Image src={'/assets/img/castle.png'} alt="Castle" width={1000} height={1000} className="w-52" />
                    <Image src={'/assets/img/flower-4.png'} alt="Flower" width={1000} height={1000} className="w-52" />
                </div>
                <h1 className={`${tangerine.className} sm:text-6xl text-5xl font-bold`}>We Found Love</h1>
                <p className="sm:text-lg text-sm">
                    “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                    cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                    benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
                </p>
                <p className="sm:text-lg text-sm">(QS. Ar Rum : 21)</p>
                <div className="flex items-center gap-2 w-full">
                    <hr className="grow border border-primary" />
                    <HiDotsHorizontal size={24} />
                    <hr className="grow border border-primary" />
                </div>
                <div className="grid grid-cols-4 md:gap-4 gap-2 w-full text-secondary">
                    <div className="bg-primary sm:rounded-2xl rounded-lg md:p-6 p-4">
                        <h3 className={`${vidaloka.className} md:text-6xl text-2xl`}>{timeLeft.days}</h3>
                        <p className="md:text-lg text-sm">Hari</p>
                    </div>
                    <div className="bg-primary sm:rounded-2xl rounded-lg md:p-6 p-4">
                        <h3 className={`${vidaloka.className} md:text-6xl text-2xl`}>{timeLeft.hours}</h3>
                        <p className="md:text-lg text-sm">Jam</p>
                    </div>
                    <div className="bg-primary sm:rounded-2xl rounded-lg md:p-6 p-4">
                        <h3 className={`${vidaloka.className} md:text-6xl text-2xl`}>{timeLeft.minutes}</h3>
                        <p className="md:text-lg text-sm">Menit</p>
                    </div>
                    <div className="bg-primary sm:rounded-2xl rounded-lg md:p-6 p-4">
                        <h3 className={`${vidaloka.className} md:text-6xl text-2xl`}>{timeLeft.seconds}</h3>
                        <p className="md:text-lg text-sm">Detik</p>
                    </div>
                </div>

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
            </div>
        </div>
    );
}
