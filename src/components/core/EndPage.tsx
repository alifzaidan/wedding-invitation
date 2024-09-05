import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { GrMapLocation, GrSend } from 'react-icons/gr';
import { MdOutlineCardGiftcard } from 'react-icons/md';
import { PiFlowerLotusDuotone, PiMapPinAreaFill } from 'react-icons/pi';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function EndPage() {
    return (
        <div className="sm:gap-10 gap-6 sm:p-12 p-6">
            <div className="flex flex-col items-center justify-center text-center sm:gap-6 gap-4 sm:px-8 px-6 sm:pb-8 pb-24 pt-8 bg-primary border-8 border-secondary shadow-2xl h-full w-full sm:rounded-full rounded-full text-secondary">
                <div className="w-72 mx-auto mb-6">
                    <Image
                        src={'/assets/img/izza.jpg'}
                        alt="Izza & Risky"
                        width={1000}
                        height={1000}
                        className="rounded-t-full border-8 border-secondary"
                    />
                </div>
                <p className="sm:text-lg text-sm">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan do&apos;a restunya untuk
                    pernikahan kami.
                </p>
                <p className="sm:text-lg text-sm">Atas do&apos;a dan restunya, kami ucapkan terima kasih.</p>
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl font-bold`}>Izza & Risky</h1>
            </div>
        </div>
    );
}
