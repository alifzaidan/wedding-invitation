'use client';

import { Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, useAnimation } from 'framer-motion';

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

const contentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
};

const images = [
    '/assets/img/gallery-1.jpg',
    '/assets/img/gallery-2.jpg',
    '/assets/img/gallery-3.jpg',
    '/assets/img/gallery-4.jpg',
    '/assets/img/gallery-5.jpg',
    '/assets/img/gallery-6.jpg',
    '/assets/img/gallery-7.jpg',
    '/assets/img/gallery-8.jpg',
    '/assets/img/gallery-1.jpg',
];

export default function GalleryPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentRef = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                } else {
                    controls.start('hidden');
                }
            },
            { threshold: 0.2 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [controls]);

    const openLightbox = (index: any) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section ref={sectionRef} id="gallery" className="sm:py-16 py-8 sm:px-8 px-4 bg-gradient-to-br from-stone-700 to-stone-300">
            <div className="text-center text-white">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1 }}
                    variants={{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }}
                >
                    <h1 className={`${vidaloka.className} sm:text-5xl text-3xl mb-4`}>Captured Moment</h1>
                    <p className="sm:text-lg text-sm">Every Love Story Is Beautiful, But Ours Is Favorite.</p>
                </motion.div>

                <div className="flex flex-col gap-2 items-center mt-8">
                    <Slider {...settings} className="mb-6 w-full sm:w-2/3">
                        {images.slice(0, 8).map((src, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 1 }}
                                variants={contentVariants}
                                className="bg-stone-200 dm:rounded-xl rounded-lg overflow-hidden cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={src}
                                    alt={`Carousel Image ${index + 1}`}
                                    className="w-full h-auto object-cover aspect-video"
                                />
                            </motion.div>
                        ))}
                    </Slider>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full sm:w-2/3">
                        {images.slice(0, 8).map((src, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 1 }}
                                variants={contentVariants}
                                className="bg-stone-200 md:rounded-xl rounded-lg overflow-hidden cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {isOpen && <Lightbox slides={images.map((src) => ({ src }))} open={isOpen} close={() => setIsOpen(false)} index={currentIndex} />}
        </section>
    );
}
