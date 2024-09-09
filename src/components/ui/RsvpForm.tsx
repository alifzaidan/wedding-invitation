'use client';

import { saveRsvp } from '@/services/data';
import { GrSend } from 'react-icons/gr';
import Swal from 'sweetalert2';

export default function RsvpForm() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const result = await saveRsvp(formData);

        if (result.success) {
            Swal.fire({
                title: 'Terima kasih!',
                text: 'RSVP Anda telah terkirim.',
                icon: 'success',
                confirmButtonText: 'OK',
            });
            (event.target as HTMLFormElement).reset();
        } else {
            Swal.fire({
                title: 'Gagal!',
                text: result.message || 'Gagal mengirim RSVP.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };
    return (
        <form onSubmit={handleSubmit} className="text-left w-full">
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

                <label htmlFor="attendees" className="block mb-2 sm:text-lg text-sm">
                    Kehadiran*
                </label>
                <div className="flex items-center mb-4">
                    <input type="radio" id="attendees-yes" name="attendees" value="true" className="mr-2" required />
                    <label htmlFor="attendees-yes" className="sm:text-base text-sm">
                        Hadir
                    </label>
                </div>
                <div className="flex items-center mb-4">
                    <input type="radio" id="attendees-no" name="attendees" value="false" className="mr-2" required />
                    <label htmlFor="attendees-no" className="sm:text-base text-sm">
                        Tidak Hadir
                    </label>
                </div>

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
            <button
                type="submit"
                className="flex gap-2 items-center justify-center mt-2 mx-auto bg-secondary text-primary md:text-base text-sm py-3 px-6 rounded-full transition duration-200 md:hover:bg-opacity-90"
            >
                <GrSend size={20} />
                <p>Submit RSVP</p>
            </button>
        </form>
    );
}
