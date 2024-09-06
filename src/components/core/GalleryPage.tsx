import { Vidaloka } from 'next/font/google';

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default function GalleryPage() {
    return (
        <div id="gallery" className="sm:py-16 py-8 sm:px-8 px-4 bg-gradient-to-br from-stone-700 to-stone-300">
            <div className="text-center text-white">
                <h1 className={`${vidaloka.className} sm:text-5xl text-3xl mb-4`}>Captured Moment</h1>
                <p className="sm:text-lg text-sm">Every Love Story Is Beautiful, But Ours Is Favorite.</p>
                <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="bg-stone-200 h-24 rounded-xl"></div>
                    <div className="bg-stone-200 h-24 rounded-xl"></div>
                    <div className="bg-stone-200 h-24 rounded-xl"></div>
                    <div className="bg-stone-200 h-24 rounded-xl"></div>
                    <div className="bg-stone-200 h-24 rounded-xl"></div>
                    <div className="bg-stone-200 h-24 rounded-xl"></div>
                    <div className="bg-stone-200 h-24 rounded-xl"></div>
                    <div className="bg-stone-200 h-24 rounded-xl"></div>
                    <div className="bg-stone-200 h-24 rounded-xl"></div>
                </div>
            </div>
        </div>
    );
}
