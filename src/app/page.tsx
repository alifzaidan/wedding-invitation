'use client';

import CountdownPage from '@/components/core/CountdownPage';
import CoverPage from '@/components/core/CoverPage';
import ProfilePage from '@/components/core/ProfilePage';
import SchedulePage from '@/components/core/SchedulePage';
import StartPage from '@/components/core/StartPage';

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
            <StartPage />
            <CountdownPage />
            <ProfilePage />
            <SchedulePage />
        </main>
    );
}
