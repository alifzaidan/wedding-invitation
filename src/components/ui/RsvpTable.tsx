import { getRsvp } from '@/services/data';

export default async function RsvpTable({ query, currentPage }: { query: string; currentPage: number }) {
    const contacts = await getRsvp(query, currentPage);

    return (
        <table className="w-full text-sm text-left border border-primary">
            <thead className="text-sm uppercase">
                <tr className="bg-primary text-secondary border-b border-secondary text-center">
                    <th className="py-3 px-6">No</th>
                    <th className="py-3 px-6">Nama</th>
                    <th className="py-3 px-6">Kehadiran</th>
                    <th className="py-3 px-6">Jumlah Hadir</th>
                    <th className="py-3 px-6">Alamat</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index) => (
                    <tr key={contact.id} className="bg-secondary text-primary border-b border-primary">
                        <td className="py-3 px-6 text-center">{index + 1}</td>
                        <td className="py-3 px-6">{contact.name}</td>
                        <td className="py-3 px-6">{contact.attendees ? 'Hadir' : 'Tidak Hadir'}</td>
                        <td className="py-3 px-6 text-center">{contact.numAttendees}</td>
                        <td className="py-3 px-6">{contact.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
