'use client';

import { Tangerine } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoMailOpenOutline } from 'react-icons/io5';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function CoverPage() {
    const [isCoverVisible, setIsCoverVisible] = useState(true);

    const handleOpenInvitation = () => {
        setIsCoverVisible(false);
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
            className={`fixed inset-0 h-screen sm:p-8 p-4 bg-pattern transition-transform duration-700 overflow-hidden ${
                isCoverVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="flex flex-col justify-center items-center sm:gap-3 gap-2 p-5 bg-white text-center rounded-full bg-opacity-80 h-full w-full">
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

                <Image src={'/assets/img/jewerly.png'} alt="Izza & Risky" width={500} height={500} className="sm:w-44 w-28" />
                <h1 className="md:text-lg tracking-widest">WEDDING INVITATION</h1>
                <h2 className={`${tangerine.className} md:text-8xl text-6xl font-bold sm:mb-6 mb-3 text-primary`}>Izza & Risky</h2>
                <p className="md:text-base sm:text-sm text-xs">Kepada Yth. Bapak/Ibu/Saudara/i :</p>
                <h3 className="text-xl font-bold">ALIF</h3>
                <p className="md:text-sm text-xs italic">*mohon maaf bila ada kesalahan penulisan nama dan gelar</p>
                <button
                    onClick={handleOpenInvitation}
                    className="flex gap-2 items-center justify-center mt-2 bg-primary text-white md:text-base text-sm py-2 px-4 rounded-full transition duration-200 md:hover:bg-red-800"
                >
                    <IoMailOpenOutline size={20} />
                    <p>Buka Undangan</p>
                </button>

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
