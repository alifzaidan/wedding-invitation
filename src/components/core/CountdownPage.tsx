import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
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
    return (
        <div className="flex justify-center items-center sm:p-8 p-6 bg-primary">
            <div className="flex flex-col items-center justify-center text-center gap-6 lg:px-52 sm:px-24 px-4 sm:py-12 py-8 bg-secondary h-full w-full rounded-3xl text-primary">
                <div>
                    <Image src={'/assets/img/castle.png'} alt="Castle" width={1000} height={1000} className="w-52" />
                    <Image src={'/assets/img/flower-4.png'} alt="Flower" width={1000} height={1000} className="w-52" />
                </div>
                <h1 className={`${tangerine.className} sm:text-6xl text-5xl font-bold`}>We Found Love</h1>
                <p className="sm:text-base text-sm">
                    “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                    cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                    benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
                </p>
                <p>(QS. Ar Rum : 21)</p>
                <div className="flex items-center gap-2 w-full">
                    <hr className="grow border border-primary" />
                    <HiDotsHorizontal size={24} />
                    <hr className="grow border border-primary" />
                </div>
                <div className={`${vidaloka.className} grid grid-cols-4 md:gap-4 gap-2 w-full text-secondary`}>
                    <div className="bg-primary rounded-2xl md:p-6 p-4">
                        <h3 className="md:text-6xl text-2xl">27</h3>
                        <p className="md:text-lg text-sm">Hari</p>
                    </div>
                    <div className="bg-primary rounded-2xl md:p-6 p-4">
                        <h3 className="md:text-6xl text-2xl">20</h3>
                        <p className="md:text-lg text-sm">Jam</p>
                    </div>
                    <div className="bg-primary rounded-2xl md:p-6 p-4">
                        <h3 className="md:text-6xl text-2xl">27</h3>
                        <p className="md:text-lg text-sm">Menit</p>
                    </div>
                    <div className="bg-primary rounded-2xl md:p-6 p-4">
                        <h3 className="md:text-6xl text-2xl">27</h3>
                        <p className="md:text-lg text-sm">Detik</p>
                    </div>
                </div>
                <button className="flex gap-2 items-center justify-center mt-2 bg-primary text-secondary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-red-800">
                    <MdDateRange size={20} />
                    <p>Tambahkan ke Kalender</p>
                </button>
            </div>
        </div>
    );
}
