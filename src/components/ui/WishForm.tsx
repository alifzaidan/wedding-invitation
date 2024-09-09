'use client';

import { saveWish } from '@/services/data';
import { GrSend } from 'react-icons/gr';
import Swal from 'sweetalert2';

export default function WishForm() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const result = await saveWish(formData);

        if (result.success) {
            Swal.fire({
                title: 'Terima kasih!',
                text: 'Ucapanmu berhasil terkirim. Refresh halaman untuk melihat ucapanmu.',
                icon: 'success',
                confirmButtonText: 'OK',
            });
            (event.target as HTMLFormElement).reset();
        } else {
            Swal.fire({
                title: 'Gagal!',
                text: result.message || 'Gagal mengirim ucapanmu.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="text-left w-full px-2">
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

                <label htmlFor="wish" className="block mb-2 sm:text-lg text-sm">
                    Ucapan*
                </label>
                <textarea
                    id="wish"
                    name="wish"
                    className="w-full sm:px-4 px-2 py-2 mb-4 border border-gray-300 rounded-md text-primary sm:text-lg text-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Tuliskan ucapan Anda"
                    required
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
                    <option value="" disabled>
                        Konfirmasi kehadiran Anda*
                    </option>
                    <option value="true">Hadir</option>
                    <option value="false">Tidak Hadir</option>
                </select>
            </div>
            <button
                type="submit"
                className="flex gap-2 items-center justify-center mt-2 mx-auto bg-secondary text-primary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-70"
            >
                <GrSend size={20} />
                <p>Kirimkan Ucapan</p>
            </button>
        </form>
    );
}
