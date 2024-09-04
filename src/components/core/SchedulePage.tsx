import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { HiDotsHorizontal } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import { PiMapPinAreaFill } from 'react-icons/pi';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default function CountdownPage() {
    return (
        <div className="relative flex lg:flex-row flex-col justify-center items-center sm:gap-10 gap-6 sm:p-16 p-6 bg-primary">
            <div className="flex flex-col items-center justify-center text-center gap-4 px-4 sm:py-12 py-8 bg-pattern h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <h1 className={`${vidaloka.className} sm:text-5xl text-3xl`}>AKAD NIKAH</h1>
                <p className="sm:text-lg text-sm sm:mb-4 mb-2">Acara Insya Allah akan dilaksanakan pada:</p>
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl`}>Rabu</h1>
                <h1 className={`${vidaloka.className} sm:text-5xl text-3xl`}>06 . 11 . 2024</h1>
                <hr className="border border-primary h-12" />
                <p className="sm:text-lg text-sm">Pukul 09.00 WIB - Selesai</p>
                <PiMapPinAreaFill size={36} />
                <div className="sm:mb-4 mb-2">
                    <p className="sm:text-lg text-sm">Bertempat di :</p>
                    <p className="sm:text-lg text-sm">Rumah Mempelai Wanita</p>
                    <p className="sm:text-lg text-sm">Ds. Blongko Kec. Ngetos Kab. Nganjuk</p>
                </div>

                <button className="flex gap-2 items-center justify-center mt-2 bg-primary text-secondary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-red-800">
                    <GrMapLocation size={20} />
                    <p>Google Maps</p>
                </button>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4 px-4 sm:py-12 py-8 bg-pattern h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <h1 className={`${vidaloka.className} sm:text-5xl text-3xl`}>RESEPSI</h1>
                <p className="sm:text-lg text-sm sm:mb-4 mb-2">Acara Insya Allah akan dilaksanakan pada:</p>
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl`}>Kamis</h1>
                <h1 className={`${vidaloka.className} sm:text-5xl text-3xl`}>07 . 11 . 2024</h1>
                <hr className="border border-primary h-12" />
                <p className="sm:text-lg text-sm">Pukul 09.00 WIB - Selesai</p>
                <PiMapPinAreaFill size={36} />
                <div className="sm:mb-4 mb-2">
                    <p className="sm:text-lg text-sm">Bertempat di :</p>
                    <p className="sm:text-lg text-sm">Rumah Mempelai Pria</p>
                    <p className="sm:text-lg text-sm">Ds. Blongko Kec. Ngetos Kab. Nganjuk</p>
                </div>

                <button className="flex gap-2 items-center justify-center mt-2 bg-primary text-secondary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-red-800">
                    <GrMapLocation size={20} />
                    <p>Google Maps</p>
                </button>
            </div>
            <Image src={'/assets/img/flower-6.png'} alt="Flower" width={1000} height={1000} className="absolute md:w-60 w-36 top-28 left-0" />
            <Image
                src={'/assets/img/flower-6.png'}
                alt="Flower"
                width={1000}
                height={1000}
                className="absolute md:w-60 w-36 bottom-24 right-0 transform scale-x-[-1]"
            />
        </div>
    );
}
