'use client';

import CoverPage from '@/components/core/CoverPage';
import { useEffect } from 'react';

export default function Home() {
    // useEffect(() => {
    //     const handleContextMenu = (e: any) => {
    //         e.preventDefault();
    //     };
    //     document.addEventListener('contextmenu', handleContextMenu);
    //     return () => {
    //         document.removeEventListener('contextmenu', handleContextMenu);
    //     };
    // }, []);

    return (
        <main className="relative overflow-hidden">
            <CoverPage />
            <div className="flex justify-center items-center h-screen bg-amber-600">
                <div className="text-center">Isi Undangan</div>
            </div>
            <div className="flex justify-center items-center h-screen bg-red-600">
                <div className="text-center">Isi Undangan</div>
            </div>
            <div className="flex justify-center items-center h-screen bg-green-600">
                <div className="text-center">Isi Undangan</div>
            </div>
        </main>
    );
}
