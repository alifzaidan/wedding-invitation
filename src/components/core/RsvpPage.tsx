import { Tangerine, Vidaloka } from 'next/font/google';
import { GrMapLocation, GrSend } from 'react-icons/gr';
import { MdOutlineCardGiftcard } from 'react-icons/md';
import { PiFlowerLotusDuotone, PiMapPinAreaFill } from 'react-icons/pi';

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function RsvpPage() {
    return (
        <div className="relative flex lg:flex-row flex-col justify-center  sm:gap-10 gap-6 sm:p-12 p-6">
            <div className="flex flex-col items-center justify-center text-center sm:gap-8 gap-4 sm:px-8 px-4 sm:py-12 py-8 bg-primary border-8 border-secondary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-secondary">
                <div className="w-fit mx-auto flex items-center justify-center mb-4 bg-secondary text-primary p-3 rounded-full">
                    <MdOutlineCardGiftcard className="text-primary sm:text-4xl text-3xl" />
                </div>
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl`}>Wedding Gift</h1>
                <p className="sm:text-lg text-sm sm:mb-4 mb-2">
                    Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi
                    kado secara cashless.
                </p>
                <button className="flex gap-2 items-center justify-center mt-2 bg-secondary text-primary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-90">
                    <MdOutlineCardGiftcard size={20} />
                    <p>Kirim Hadiah</p>
                </button>
            </div>

            <div className="flex flex-col items-center justify-center text-center sm:gap-8 gap-4 sm:px-8 px-4 sm:py-12 py-8 bg-primary border-8 border-secondary shadow-2xl h-full w-full sm:rounded-3xl rounded-2xl text-secondary">
                <div className="w-fit mx-auto flex items-center justify-center mb-4 bg-secondary text-primary p-3 rounded-full">
                    <PiFlowerLotusDuotone className="text-primary sm:text-4xl text-3xl" />
                </div>
                <h1 className={`${tangerine.className} sm:text-8xl text-6xl`}>Rsvp</h1>
                <p className="sm:text-lg text-sm ">
                    Silahkan mengisi form RSVP berikut untuk memberitahukan kehadiran Anda pada acara pernikahan kami.
                </p>
                <form action="/" className="text-left w-full">
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

                        <label htmlFor="attendance" className="block mb-2 sm:text-lg text-sm">
                            Kehadiran*
                        </label>
                        <div className="flex items-center mb-4">
                            <input type="radio" id="attendance-yes" name="attendance" value="yes" className="mr-2" required />
                            <label htmlFor="attendance-yes" className="sm:text-base text-sm">
                                Hadir
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="radio" id="attendance-no" name="attendance" value="no" className="mr-2" required />
                            <label htmlFor="attendance-no" className="sm:text-base text-sm">
                                Tidak Hadir
                            </label>
                        </div>

                        <label htmlFor="num-attendees" className="block mb-2 sm:text-lg text-sm">
                            Jumlah Kehadiran*
                        </label>
                        <select
                            id="num-attendees"
                            name="num-attendees"
                            className="w-full px-4 py-2 mb-4 border border-secondary rounded-md text-primary sm:text-lg text-sm focus:outline-none focus:ring-primary focus:border-primary"
                            required
                        >
                            <option value="" disabled selected>
                                Pilih jumlah kehadiran
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <label htmlFor="address" className="block mb-2 sm:text-lg text-sm">
                            Alamat
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            className="w-full sm:px-4 px-2 py-2 mb-4 border border-gray-300 rounded-md text-primary sm:text-lg text-sm focus:outline-none focus:ring-primary focus:border-primary"
                            placeholder="Masukkan alamat Anda"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="flex gap-2 items-center justify-center mt-2 mx-auto bg-secondary text-primary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-90"
                    >
                        <GrSend size={20} />
                        <p>Submit RSVP</p>
                    </button>
                </form>
            </div>
        </div>
    );
}
