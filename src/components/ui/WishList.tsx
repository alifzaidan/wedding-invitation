import { formateDate } from '@/lib/utils';
import { getWishes } from '@/services/data';
import { Vidaloka } from 'next/font/google';
import { IoMdCloseCircle } from 'react-icons/io';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { RiUser3Fill } from 'react-icons/ri';

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default async function WishList() {
    const wishes = await getWishes();
    return (
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
    );
}
