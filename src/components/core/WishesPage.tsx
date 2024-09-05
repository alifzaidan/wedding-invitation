import { Tangerine, Vidaloka } from 'next/font/google';
import Image from 'next/image';
import { FaCheckCircle, FaRegUser } from 'react-icons/fa';
import { GrMapLocation, GrSend } from 'react-icons/gr';
import { PiFlowerLotusDuotone, PiMapPinAreaFill } from 'react-icons/pi';
import { RiUser3Fill } from 'react-icons/ri';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const vidaloka = Vidaloka({
    subsets: ['latin'],
    weight: '400',
});

export default function WishesPage() {
    return (
        <div className="sm:p-12 p-6 bg-primary">
            <div className="text-center md:px-12 px-2 sm:py-12 py-8 bg-pattern border-8 border-primary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-primary">
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl`}>Best Whises</h1>
                <p className="sm:text-lg text-sm lg:px-32 mt-2 mb-4">
                    Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa jabatan-jabatan tangan atau pelukan-pelukan hangat, masih ada
                    simpul-simpul senyum dan doa-doa baik yang kami harapkan.
                </p>
                <form action="/" className="text-left w-full px-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 sm:text-lg text-sm">
                            Nama*
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full sm:px-4 px-2 py-2 mb-4 border border-secondary rounded-md text-primary sm:text-lg text-sm focus:outline-none focus:ring-primary focus:border-primary"
                            placeholder="Masukkan nama Anda"
                            required
                        />

                        <label htmlFor="wishes" className="block mb-2 sm:text-lg text-sm">
                            Ucapan
                        </label>
                        <textarea
                            id="wishes"
                            name="wishes"
                            className="w-full sm:px-4 px-2 py-2 mb-4 border border-gray-300 rounded-md text-primary sm:text-lg text-sm focus:outline-none focus:ring-primary focus:border-primary"
                            placeholder="Tuliskan ucapan Anda"
                        ></textarea>

                        <label htmlFor="attendees" className="block mb-2 sm:text-lg text-sm">
                            Konfirmasi Kehadiran*
                        </label>
                        <select
                            id="attendees"
                            name="attendees"
                            className="w-full px-4 py-2 mb-4 border border-secondary rounded-md text-primary sm:text-lg text-sm focus:outline-none focus:ring-primary focus:border-primary"
                            required
                        >
                            <option value="" disabled selected>
                                Konfirmasi kehadiran Anda
                            </option>
                            <option value="yes">Hadir</option>
                            <option value="no">Tidak Hadir</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="flex gap-2 items-center justify-center mt-2 mx-auto bg-secondary text-primary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-orange-200"
                    >
                        <GrSend size={20} />
                        <p>Kirimkan Ucapan</p>
                    </button>
                </form>
                <div className="mt-8 sm:p-8 p-4 space-y-4 bg-primary border-8 border-secondary shadow-2xl h-96 w-full overflow-auto sm:rounded-3xl rounded-2xl text-secondary">
                    <div className="flex gap-4">
                        <div className=" w-fit h-fit mx-auto hidden sm:flex items-center justify-center mb-4 bg-secondary text-primary p-3 rounded-full">
                            <RiUser3Fill className="text-primary sm:text-2xl text-xl" />
                        </div>
                        <div className="w-full bg-secondary rounded-2xl text-primary sm:px-6 px-4 py-3 text-left">
                            <div className="flex gap-4 items-center md:mb-4 mb-2">
                                <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>Alip</h1>
                                <div className="flex items-center gap-2 bg-primary text-secondary rounded-lg px-2 py-1">
                                    <FaCheckCircle className="sm:text-sm text-xs" />
                                    <p className="sm:text-sm text-xs">Hadir</p>
                                </div>
                            </div>
                            <p className="sm:text-lg text-xs">Selamat menempuh hidup baru. Semoga sakinah mawadah warohmah</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className=" w-fit h-fit mx-auto hidden sm:flex items-center justify-center mb-4 bg-secondary text-primary p-3 rounded-full">
                            <RiUser3Fill className="text-primary sm:text-2xl text-xl" />
                        </div>
                        <div className="w-full bg-secondary rounded-2xl text-primary sm:px-6 px-4 py-3 text-left">
                            <div className="flex gap-4 items-center md:mb-4 mb-2">
                                <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>Enggar</h1>
                                <div className="flex items-center gap-2 bg-primary text-secondary rounded-lg px-2 py-1">
                                    <FaCheckCircle className="sm:text-sm text-xs" />
                                    <p className="sm:text-sm text-xs">Hadir</p>
                                </div>
                            </div>
                            <p className="sm:text-lg text-xs">Selamat menempuh hidup baru. Semoga sakinah mawadah warohmah</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className=" w-fit h-fit mx-auto hidden sm:flex items-center justify-center mb-4 bg-secondary text-primary p-3 rounded-full">
                            <RiUser3Fill className="text-primary sm:text-2xl text-xl" />
                        </div>
                        <div className="w-full bg-secondary rounded-2xl text-primary sm:px-6 px-4 py-3 text-left">
                            <div className="flex gap-4 items-center md:mb-4 mb-2">
                                <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>Thoriq</h1>
                                <div className="flex items-center gap-2 bg-primary text-secondary rounded-lg px-2 py-1">
                                    <FaCheckCircle className="sm:text-sm text-xs" />
                                    <p className="sm:text-sm text-xs">Hadir</p>
                                </div>
                            </div>
                            <p className="sm:text-lg text-xs">Selamat menempuh hidup baru. Semoga sakinah mawadah warohmah</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className=" w-fit h-fit mx-auto hidden sm:flex items-center justify-center mb-4 bg-secondary text-primary p-3 rounded-full">
                            <RiUser3Fill className="text-primary sm:text-2xl text-xl" />
                        </div>
                        <div className="w-full bg-secondary rounded-2xl text-primary sm:px-6 px-4 py-3 text-left">
                            <div className="flex gap-4 items-center md:mb-4 mb-2">
                                <h1 className={`${vidaloka.className} sm:text-2xl text-lg`}>Imam</h1>
                                <div className="flex items-center gap-2 bg-primary text-secondary rounded-lg px-2 py-1">
                                    <FaCheckCircle className="sm:text-sm text-xs" />
                                    <p className="sm:text-sm text-xs">Hadir</p>
                                </div>
                            </div>
                            <p className="sm:text-lg text-xs">Selamat menempuh hidup baru. Semoga sakinah mawadah warohmah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
