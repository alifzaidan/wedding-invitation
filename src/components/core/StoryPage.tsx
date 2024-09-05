import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { GrMapLocation } from 'react-icons/gr';
import { PiMapPinAreaFill } from 'react-icons/pi';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default function StoryPage() {
    return (
        <div className="sm:p-12 p-6 bg-primary">
            <div className="text-center md:px-12 px-8 sm:py-12 py-8 bg-pattern border-8 border-primary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl md:mb-12 mb-6`}>Love Story</h1>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4 md:mb-8 mb-6">
                    <Image
                        src={'/assets/img/story.webp'}
                        alt="Our Story"
                        width={1000}
                        height={1000}
                        className="lg:w-1/3 w-full mx-auto sm:rounded-2xl rounded-lg"
                    />
                    <div className="lg:text-left text-center md:space-y-4 space-y-2">
                        <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>AWAL BERTEMU</h1>
                        <p className="sm:text-lg text-sm italic">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex libero, ad officiis aliquid provident sequi mollitia
                            explicabo alias reiciendis, facere quibusdam velit voluptatem, natus praesentium quasi dolore cupiditate eos?
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4 md:mb-8 mb-6">
                    <Image
                        src={'/assets/img/story.webp'}
                        alt="Our Story"
                        width={1000}
                        height={1000}
                        className="lg:w-1/3 w-full mx-auto sm:rounded-2xl rounded-lg"
                    />
                    <div className="lg:text-left text-center md:space-y-4 space-y-2">
                        <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>BERTUNANGAN</h1>
                        <p className="sm:text-lg text-sm italic">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex libero, ad officiis aliquid provident sequi mollitia
                            explicabo alias reiciendis, facere quibusdam velit voluptatem, natus praesentium quasi dolore cupiditate eos?
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center md:gap-8 gap-4">
                    <Image
                        src={'/assets/img/story.webp'}
                        alt="Our Story"
                        width={1000}
                        height={1000}
                        className="lg:w-1/3 w-full mx-auto sm:rounded-2xl rounded-lg"
                    />
                    <div className="lg:text-left text-center md:space-y-4 space-y-2">
                        <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>MENIKAH</h1>
                        <p className="sm:text-lg text-sm italic">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex libero, ad officiis aliquid provident sequi mollitia
                            explicabo alias reiciendis, facere quibusdam velit voluptatem, natus praesentium quasi dolore cupiditate eos?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
