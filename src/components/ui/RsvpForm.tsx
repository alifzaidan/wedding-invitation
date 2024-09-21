'use client';

import { useState } from 'react';
import { GrSend } from 'react-icons/gr';
import Swal from 'sweetalert2';

export default function RsvpForm() {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        const res = await fetch('/api/rsvp', {
            method: 'POST',
            body: JSON.stringify({
                name: e.target.name.value,
                numAttendees: e.target.numAttendees.value,
                address: e.target.address.value,
                createdAt: new Date().toISOString(),
            }),
        });
        if (res.status === 200) {
            setIsLoading(false);
            Swal.fire({
                title: 'Terima kasih!',
                text: 'RSVP berhasil terkirim',
                icon: 'success',
                confirmButtonText: 'OK',
            });
            e.target.reset();
        } else {
            Swal.fire({
                title: 'Gagal!',
                text: 'Gagal melakukan RSVP.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            setError('Terjadi Kesalahan');
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="text-left w-full">
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

                <label htmlFor="numAttendees" className="block mb-2 sm:text-lg text-sm">
                    Jumlah Kehadiran*
                </label>
                <select
                    id="numAttendees"
                    name="numAttendees"
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
            {error !== '' && <div className="text-red-600 font-bold mb-3">{error}</div>}
            <button
                disabled={isLoading}
                type="submit"
                className="flex gap-2 items-center justify-center mt-2 mx-auto bg-secondary text-primary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-90"
            >
                <GrSend size={20} />
                <p>{isLoading ? 'Tunggu Sebentar...' : 'Submit RSVP'}</p>
            </button>
        </form>
    );
}
