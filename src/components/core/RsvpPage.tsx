'use client';

import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import { MdContentCopy, MdOutlineCardGiftcard } from 'react-icons/md';
import { PiFlowerLotusDuotone } from 'react-icons/pi';
import RsvpForm from '../ui/RsvpForm';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default function RsvpPage() {
    const [isGiftOptionOpen, setIsGiftOptionOpen] = useState(false);
    const [accountText1, setAccountText1] = useState('Salin No. Rekening');
    const [accountText2, setAccountText2] = useState('Salin No. Rekening');
    const [addressText, setAddressText] = useState('Salin Alamat');

    const toggleGiftOption = () => {
        setIsGiftOptionOpen(!isGiftOptionOpen);
    };

    const handleCopyAccount1 = () => {
        navigator.clipboard.writeText('1710015093597').then(() => {
            setAccountText1('Berhasil Disalin');
            setTimeout(() => {
                setAccountText1('Salin No. Rekening');
            }, 2000);
        });
    };

    const handleCopyAccount2 = () => {
        navigator.clipboard.writeText('1710013375731').then(() => {
            setAccountText2('Berhasil Disalin');
            setTimeout(() => {
                setAccountText2('Salin No. Rekening');
            }, 2000);
        });
    };

    const handleCopyAddress = () => {
        navigator.clipboard
            .writeText('Jln. Sumber Sekar Gg.Dahlia No.10 Rt.01/Rw.07 Kelurahan Kalirejo, Kecamatan Lawang, Kabupaten Malang')
            .then(() => {
                setAddressText('Berhasil Disalin');
                setTimeout(() => {
                    setAddressText('Salin Alamat');
                }, 2000);
            });
    };

    return (
        <div className="relative flex lg:flex-row flex-col justify-center  sm:gap-10 gap-6 sm:p-12 p-6">
            <div className="flex flex-col items-center justify-center text-center sm:gap-8 gap-4 sm:px-8 px-4 sm:py-12 py-8 bg-primary border-8 border-secondary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-secondary">
                <div className="w-fit mx-auto flex items-center justify-center mb-4 bg-secondary text-primary p-3 rounded-full">
                    <PiFlowerLotusDuotone className="text-primary sm:text-4xl text-3xl" />
                </div>
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl`}>Rsvp</h1>
                <p className="sm:text-lg text-sm ">
                    Silahkan mengisi form RSVP berikut untuk memberitahukan kehadiran Anda pada acara pernikahan kami.
                </p>
                <RsvpForm />
            </div>

            <div className="flex flex-col items-center justify-center text-center sm:gap-8 gap-4 sm:px-8 px-4 sm:py-12 py-8 bg-primary border-8 border-secondary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-secondary">
                <div className="w-fit mx-auto flex items-center justify-center mb-4 bg-secondary text-primary p-3 rounded-full">
                    <MdOutlineCardGiftcard className="text-primary sm:text-4xl text-3xl" />
                </div>
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl`}>Wedding Gift</h1>
                <p className="sm:text-lg text-sm sm:mb-4 mb-2">
                    Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi
                    kado secara cashless.
                </p>
                <button
                    onClick={toggleGiftOption}
                    className="flex gap-2 items-center justify-center  bg-secondary text-primary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-90"
                >
                    <MdOutlineCardGiftcard size={20} />
                    <p>{isGiftOptionOpen ? 'Tutup Opsi Kirim Hadiah' : 'Buka Opsi Kirim Hadiah'}</p>
                </button>

                {isGiftOptionOpen && (
                    <>
                        <div className="w-full flex flex-col items-start gap-2 sm:p-6 p-4 bg-secondary border-8 border-primary shadow-2xl text-primary rounded-2xl">
                            <Image src={'/assets/img/logo-mandiri.png'} alt="Bank Mandiri" width={1000} height={1000} className="w-32 self-end" />

                            <Image src={'/assets/img/chip-atm.png'} alt="Bank Mandiri" width={1000} height={1000} className="w-12" />
                            <div className="text-left">
                                <p className="content-start sm:text-lg text-sm font-bold">1710 0150 9359 7</p>
                                <p className="content-start sm:text-lg text-sm font-bold">Binti Izatul Munthamimah</p>
                            </div>

                            <button
                                onClick={handleCopyAccount1}
                                className="flex self-center gap-2 items-center justify-center mt-2 bg-primary text-secondary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-90"
                            >
                                <MdContentCopy size={20} />
                                <p>{accountText1}</p>
                            </button>
                        </div>
                        <div className="w-full flex flex-col items-start gap-2 sm:p-6 p-4 bg-secondary border-8 border-primary shadow-2xl text-primary rounded-2xl">
                            <Image src={'/assets/img/logo-mandiri.png'} alt="Bank Mandiri" width={1000} height={1000} className="w-32 self-end" />

                            <Image src={'/assets/img/chip-atm.png'} alt="Bank Mandiri" width={1000} height={1000} className="w-12" />
                            <div className="text-left">
                                <p className="content-start sm:text-lg text-sm font-bold">1710 0133 7573 1</p>
                                <p className="content-start sm:text-lg text-sm font-bold">Risky Dwi Syah Putra</p>
                            </div>

                            <button
                                onClick={handleCopyAccount2}
                                className="flex self-center gap-2 items-center justify-center mt-2 bg-primary text-secondary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-90"
                            >
                                <MdContentCopy size={20} />
                                <p>{accountText2}</p>
                            </button>
                        </div>
                        <div className="w-full flex flex-col items-center gap-2 sm:p-6 p-4 bg-secondary border-8 border-primary shadow-2xl text-primary rounded-2xl">
                            <MdOutlineCardGiftcard className="text-primary sm:text-4xl text-3xl mb-2" />

                            <p className={`${vidaloka.className} content-start sm:text-3xl text-xl`}>KIRIM HADIAH</p>
                            <p className="content-start sm:text-lg text-sm">
                                Jln. Sumber Sekar Gg.Dahlia No.10 Rt.01/Rw.07 Kelurahan Kalirejo, Kecamatan Lawang, Kabupaten Malang
                            </p>

                            <button
                                onClick={handleCopyAddress}
                                className="flex gap-2 items-center justify-center mt-2 bg-primary text-secondary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-90"
                            >
                                <MdContentCopy size={20} />
                                <p>{addressText}</p>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
