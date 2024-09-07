import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { GrMapLocation } from 'react-icons/gr';
import { PiMapPinAreaFill } from 'react-icons/pi';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default function StoryPage() {
    return (
        <div className="sm:p-12 p-6 bg-primary">
            <div className="text-center md:px-12 px-8 sm:py-12 py-8 bg-pattern border-8 border-primary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl md:mb-12 mb-6`}>Love Story</h1>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4 md:mb-8 mb-6">
                    <Image
                        src={'/assets/img/story.webp'}
                        alt="Our Story"
                        width={1000}
                        height={1000}
                        className="lg:w-1/3 w-full mx-auto sm:rounded-2xl rounded-lg"
                    />
                    <div className="lg:text-left text-center md:space-y-4 space-y-2">
                        <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>PERTEMUAN</h1>
                        <p className="sm:text-lg text-sm italic">
                            Tidak ada yang kebetulan di dunia ini. semua sudah tersusun rapi oleh sang maha kuasa, kita tidak bisa memilih kepada
                            siapa kita akan jatuh cinta, kami bertemu pada tahun 2015, tepatnya saat kami sedang menempuh pendidikan di sekolah
                            menengah yang sama, tidak ada yang pernah menyangka bahwa pertemuan itu membawa kami sejauh ini.
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4 md:mb-8 mb-6">
                    <Image
                        src={'/assets/img/story.webp'}
                        alt="Our Story"
                        width={1000}
                        height={1000}
                        className="lg:w-1/3 w-full mx-auto sm:rounded-2xl rounded-lg"
                    />
                    <div className="lg:text-left text-center md:space-y-4 space-y-2">
                        <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>LAMARAN</h1>
                        <p className="sm:text-lg text-sm italic">
                            Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu kami semakin dekat, mulai 2018 kami cukup sering
                            berkomunikasi, bertemu, dan alam seakan terus berkonspirasi untuk menyatukan kami berdua.
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4 md:mb-8 mb-6">
                    <Image
                        src={'/assets/img/story.webp'}
                        alt="Our Story"
                        width={1000}
                        height={1000}
                        className="lg:w-1/3 w-full mx-auto sm:rounded-2xl rounded-lg"
                    />
                    <div className="lg:text-left text-center md:space-y-4 space-y-2">
                        <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>PENDEKATAN</h1>
                        <p className="sm:text-lg text-sm italic">
                            Kehendaknya menuntun kami pada sebuah pertemuan yang tak pernah di sangka hingga akhirnya membawa kami pada sebuah ikatan
                            suci yang dicintai-Nya. kami melangsungkan acara lamaran di bulan Mei 2024 lalu.
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4">
                    <Image
                        src={'/assets/img/story.webp'}
                        alt="Our Story"
                        width={1000}
                        height={1000}
                        className="lg:w-1/3 w-full mx-auto sm:rounded-2xl rounded-lg"
                    />
                    <div className="lg:text-left text-center md:space-y-4 space-y-2">
                        <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>MENIKAH</h1>
                        <p className="sm:text-lg text-sm italic">
                            Kami memutuskan untuk mengikrarkan janji suci pernikahan di bulan ini. insyaAllah sebagaimana yang pernah dikatakan oleh
                            saydina Ali bin Abi Thalib &quot;Apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu&quot;.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
