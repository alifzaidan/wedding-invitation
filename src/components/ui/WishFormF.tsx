'use client';

import { saveData } from '@/lib/firebase/services';
import { useState } from 'react';
import { GrSend } from 'react-icons/gr';
import Swal from 'sweetalert2';

export default function WishFormF() {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        const res = await fetch('/api/wishes', {
            method: 'POST',
            body: JSON.stringify({
                name: e.target.name.value,
                wish: e.target.wish.value,
                attendees: e.target.attendees.value == 'true' ? true : false,
                createdAt: new Date().toISOString(),
            }),
        });
        if (res.status === 200) {
            setIsLoading(false);
            Swal.fire({
                title: 'Terima kasih!',
                text: 'Ucapanmu berhasil terkirim',
                icon: 'success',
                confirmButtonText: 'OK',
            });
            e.target.reset();
        } else {
            Swal.fire({
                title: 'Gagal!',
                text: 'Gagal mengirim ucapanmu.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            setError('Terjadi Kesalahan');
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="text-left w-full px-2">
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
                    <option value="" disabled selected>
                        Konfirmasi kehadiran Anda*
                    </option>
                    <option value="true">Hadir</option>
                    <option value="false">Tidak Hadir</option>
                </select>
            </div>
            {error !== '' && <div className="text-red-600 font-bold mb-3">{error}</div>}
            <button
                disabled={isLoading}
                type="submit"
                className="flex gap-2 items-center justify-center mt-2 mx-auto bg-secondary text-primary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-70"
            >
                <GrSend size={20} />
                <p>{isLoading ? 'Tunggu Sebentar...' : 'Kirimkan Ucapan'}</p>
            </button>
        </form>
    );
}
