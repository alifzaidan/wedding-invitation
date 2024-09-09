import { formateDate } from '@/lib/utils';
import { getWishes } from '@/services/data';
import { Tangerine, Vidaloka } from 'next/font/google';
import { IoMdCloseCircle } from 'react-icons/io';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { RiUser3Fill } from 'react-icons/ri';
import WishForm from '../ui/WishForm';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default async function WishesPage() {
    const wishes = await getWishes();

    return (
        <div id="ucapan" className="sm:p-12 p-6 bg-primary">
            <div className="text-center md:px-12 px-2 sm:py-12 py-8 bg-pattern border-8 border-primary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl`}>Best Wishes</h1>
                <p className="sm:text-lg text-sm lg:px-32 mt-2 mb-4">
                    Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa jabatan-jabatan tangan atau pelukan-pelukan hangat, masih ada
                    simpul-simpul senyum dan doa-doa baik yang kami harapkan.
                </p>

                <WishForm />

                <div className="mt-8 sm:p-8 p-4 space-y-4 bg-primary border-8 border-secondary shadow-2xl h-96 w-full overflow-auto sm:rounded-3xl rounded-2xl text-secondary">
                    {wishes.map((wish) => (
                        <div key={wish.id} className="flex gap-4">
                            <div className=" w-fit h-fit mx-auto hidden sm:flex items-center justify-center mb-4 bg-secondary text-primary p-3 rounded-full">
                                <RiUser3Fill className="text-primary sm:text-2xl text-xl" />
                            </div>
                            <div className="w-full bg-secondary rounded-2xl text-primary sm:px-6 px-4 py-4 text-left">
                                <div className="flex gap-4 justify-between items-center md:mb-2 mb-1">
                                    <div className="flex md:gap-4 gap-2 items-center">
                                        <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>{wish.name}</h1>
                                        <div className="flex items-center gap-1 bg-primary text-secondary rounded-lg px-2 py-1">
                                            {wish.attendees ? (
                                                <IoCheckmarkCircleSharp className="sm:text-lg text-xs" />
                                            ) : (
                                                <IoMdCloseCircle className="sm:text-lg text-xs" />
                                            )}
                                            <p className="sm:text-sm text-[10px]">{wish.attendees ? 'Hadir' : 'Tidak Hadir'}</p>
                                        </div>
                                    </div>
                                    <p className="sm:text-base text-xs text-right">{formateDate(wish.createdAt.toString())}</p>
                                </div>
                                <p className="sm:text-lg text-xs">{wish.wish}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
