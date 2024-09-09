import Pagination from '@/components/ui/Pagination';
import RsvpTable from '@/components/ui/RsvpTable';
import RsvpTableSkeleton from '@/components/ui/RsvpTableSkeleton';
import Search from '@/components/ui/Search';
import { getRsvpPages } from '@/services/data';
import { Tangerine } from 'next/font/google';
import { Suspense } from 'react';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default async function Contact({ searchParams }: { searchParams?: { query?: string; page?: string } }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await getRsvpPages(query);

    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <h1 className={`${tangerine.className} md:text-6xl text-5xl font-bold text-center text-primary`}>Daftar Rsvp</h1>
            <div className="flex items-center justify-between gap-1 my-5">
                <Search />
            </div>
            <Suspense key={query + currentPage} fallback={<RsvpTableSkeleton />}>
                <RsvpTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="flex justify-center mt-4">{<Pagination totalPages={totalPages} />}</div>
        </div>
    );
}
