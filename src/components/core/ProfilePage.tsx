import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default function ProfilePage() {
    return (
        <div id="tentang-kami" className="sm:py-16 py-8 sm:px-8 px-4">
            <div className="text-center text-primary sm:mb-12 mb-8">
                <h1 className={`${tangerine.className} sm:text-6xl text-4xl mb-4`}>Assalamualaikum Wr. Wb</h1>
                <p className="sm:text-lg text-sm">
                    Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
                </p>
            </div>
            <div className="flex lg:flex-row flex-col justify-evenly items-center gap-12">
                <div className="text-center text-primary">
                    <div className="relative w-72 mx-auto mb-6">
                        <Image src={'/assets/img/flower-5.png'} alt="Flower" width={1000} height={1000} className="absolute w-44 -top-4 -left-6" />
                        <Image
                            src={'/assets/img/izza.jpg'}
                            alt="Izza"
                            width={1000}
                            height={1000}
                            className="rounded-t-full border-8 border-primary"
                        />
                    </div>
                    <h2 className={`${tangerine.className} md:text-8xl text-6xl font-bold`}>Izza</h2>
                    <p className={`${vidaloka.className} sm:text-4xl text-2xl text-tertiary mb-4`}>Binti Izzatul Munthamimah</p>
                    <p className="sm:text-lg text-sm">Putri dari</p>
                    <p className="sm:text-lg text-sm">Bapak Abdul Aziz (Alm) & Ibu Siti Munawaroh</p>
                    <Link
                        href={'https://www.instagram.com/zaidanaliff_'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit mx-auto flex items-center justify-center mt-4 bg-primary text-secondary p-3 rounded-full transition duration-200 md:hover:bg-opacity-90"
                    >
                        <FaInstagram size={24} />
                    </Link>
                </div>
                <Image src={'/assets/img/and.png'} alt="Izza & Risky" width={1000} height={1000} className="md:w-40 w-32" />
                <div className="text-center text-primary">
                    <div className="relative w-72 mx-auto mb-6">
                        <Image
                            src={'/assets/img/flower-5.png'}
                            alt="Flower"
                            width={1000}
                            height={1000}
                            className="absolute w-44 -top-4 -right-6 transform scale-x-[-1]"
                        />
                        <Image
                            src={'/assets/img/izza.jpg'}
                            alt="Izza"
                            width={1000}
                            height={1000}
                            className="rounded-t-full border-8 border-primary"
                        />
                    </div>
                    <h2 className={`${tangerine.className} md:text-8xl text-6xl font-bold`}>Risky</h2>
                    <p className={`${vidaloka.className} sm:text-4xl text-2xl text-tertiary mb-4`}>Risky Dwi Syah Putra</p>
                    <p className="sm:text-lg text-sm">Putra dari</p>
                    <p className="sm:text-lg text-sm">Bapak Asnan & Ibu Istiqomah</p>
                    <Link
                        href={'https://www.instagram.com/zaidanaliff_'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit mx-auto flex items-center justify-center mt-4 bg-primary text-secondary p-3 rounded-full transition duration-200 md:hover:bg-opacity-90"
                    >
                        <FaInstagram size={24} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
