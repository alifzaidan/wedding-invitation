import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { IoIosArrowRoundDown } from 'react-icons/io';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default function StartPage() {
    return (
        <section id="home" className="relative flex flex-col items-center sm:gap-3 gap-2 pt-40 bg-pattern text-center w-full pb-72 -z-10">
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
                <h1 className={`${vidaloka.className} md:text-2xl text-lg tracking-widest`}>THE WEDDING OF</h1>
                <h2 className={`${tangerine.className} md:text-8xl text-6xl font-bold`}>Izza & Risky</h2>
                <h3 className={`${vidaloka.className} md:text-2xl text-lg`}>06 . 11 . 2024</h3>
                <div className="mx-auto border border-primary w-8 h-12 rounded-full flex items-end justify-center">
                    <IoIosArrowRoundDown size={30} className="animate-bounce" />
                </div>
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
