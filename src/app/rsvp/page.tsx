import RsvpTable from '@/components/ui/RsvpTable';
import RsvpTableSkeleton from '@/components/ui/RsvpTableSkeleton';
import { Tangerine } from 'next/font/google';
import Image from 'next/image';
import { Suspense } from 'react';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default async function Contact() {
    return (
        <>
            <div className="fixed bg-pattern flex flex-col items-center inset-0 -z-10">
                <div className="w-full h-full top-0 bg-white bg-opacity-50 absolute z-10"></div>
                <Image src={'/assets/img/flower-1.png'} alt="Flower" width={1000} height={1000} className="absolute top-0 sm:w-1/2" />
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
                <Image
                    src={'/assets/img/track.png'}
                    alt="Track"
                    width={1000}
                    height={1000}
                    className="absolute xl:-bottom-96 lg:-bottom-52 bottom-0 w-full"
                />
                <Image
                    src={'/assets/img/castle.png'}
                    alt="Castle"
                    width={1000}
                    height={1000}
                    className="absolute xl:bottom-36 lg:bottom-52 bottom-32 lg:w-2/5"
                />
                <Image
                    src={'/assets/img/fence.png'}
                    alt="Fence"
                    width={1000}
                    height={1000}
                    className="absolute xl:bottom-24 lg:bottom-48 bottom-20 left-0 lg:w-1/5 w-1/3"
                />
                <Image
                    src={'/assets/img/fence.png'}
                    alt="Fence"
                    width={1000}
                    height={1000}
                    className="absolute xl:bottom-24 lg:bottom-48 bottom-20 right-0 lg:w-1/5 w-1/3"
                />
                <Image
                    src={'/assets/img/bride.png'}
                    alt="Bride"
                    width={1000}
                    height={1000}
                    className="absolute xl:bottom-32 lg:bottom-40 bottom-0 w-72"
                />
                <Image
                    src={'/assets/img/flower-7.png'}
                    alt="Flower"
                    width={1000}
                    height={1000}
                    className="absolute xl:-bottom-8 bottom-0 lg:-left-20 lg:w-2/3"
                />
                <Image
                    src={'/assets/img/flower-7.png'}
                    alt="Flower"
                    width={1000}
                    height={1000}
                    className="absolute xl:-bottom-8 bottom-0 -right-20 w-2/3 hidden lg:block"
                />
            </div>
            <div className="max-w-screen-md md:mx-auto mt-8 mx-4">
                <h1 className={`${tangerine.className} md:text-7xl text-6xl font-bold text-center text-primary`}>Daftar Rsvp</h1>
                <Suspense fallback={<RsvpTableSkeleton />}>
                    <RsvpTable />
                </Suspense>
            </div>
        </>
    );
}
