'use client';

import CountdownPage from '@/components/core/CountdownPage';
import CoverPage from '@/components/core/CoverPage';
import EndPage from '@/components/core/EndPage';
import GalleryPage from '@/components/core/GalleryPage';
import ProfilePage from '@/components/core/ProfilePage';
import RsvpPage from '@/components/core/RsvpPage';
import SchedulePage from '@/components/core/SchedulePage';
import StartPage from '@/components/core/StartPage';
import StoryPage from '@/components/core/StoryPage';
import WishesPage from '@/components/core/WishesPage';
import BackgroundAudio from '@/components/layout/BackgroundAudio';
import BottomNavbar from '@/components/layout/BottomNavbar';

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
            <GalleryPage />
            <StoryPage />
            <RsvpPage />
            <WishesPage />
            <EndPage />
            <BackgroundAudio />
            <BottomNavbar />
        </main>
    );
}
