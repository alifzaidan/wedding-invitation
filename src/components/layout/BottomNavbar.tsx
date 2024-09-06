import Link from 'next/link';
import { BsCalendar2HeartFill } from 'react-icons/bs';
import { GiLoveLetter, GiLovers } from 'react-icons/gi';
import { RiHomeHeartFill } from 'react-icons/ri';
import { TbCalendarMonth, TbHomeHeart, TbMessageHeart, TbPhotoSquareRounded, TbUsers } from 'react-icons/tb';

export default function BottomNavbar() {
    return (
        <nav className="fixed bottom-4 right-4 bg-primary shadow-2xl rounded-3xl z-10">
            <ul className="flex sm:gap-6 gap-4 items-center sm:px-6 px-4 py-4">
                <Link href="#home" className="flex flex-col items-center">
                    <TbHomeHeart className="sm:text-3xl text-2xl text-secondary" />
                </Link>
                <Link href="#tentang-kami" className="flex flex-col items-center">
                    <TbUsers className="sm:text-3xl text-2xl text-secondary" />
                </Link>
                <Link href="#jadwal" className="flex flex-col items-center">
                    <TbCalendarMonth className="sm:text-3xl text-2xl text-secondary" />
                </Link>
                <Link href="#gallery" className="flex flex-col items-center">
                    <TbPhotoSquareRounded className="sm:text-3xl text-2xl text-secondary" />
                </Link>
                <Link href="#ucapan" className="flex flex-col items-center">
                    <TbMessageHeart className="sm:text-3xl text-2xl text-secondary" />
                </Link>
            </ul>
        </nav>
    );
}
