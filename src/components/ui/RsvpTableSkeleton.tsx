export default function RsvpTableSkeleton() {
    const rows = Array.from({ length: 10 });

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
            <tbody className="animate-pulse">
                {rows.map((_, index) => (
                    <tr key={index} className="bg-secondary text-primary border-b border-primary">
                        <td className="py-3 px-6 text-center">
                            <div className="h-4 w-4 rounded bg-primary bg-opacity-30"></div>
                        </td>
                        <td className="py-3 px-6">
                            <div className="h-4 w-32 rounded bg-primary bg-opacity-30"></div>
                        </td>
                        <td className="py-3 px-6">
                            <div className="h-4 w-12 rounded bg-primary bg-opacity-30"></div>
                        </td>
                        <td className="py-3 px-6 text-center">
                            <div className="h-4 w-8 rounded bg-primary bg-opacity-30"></div>
                        </td>
                        <td className="py-3 px-6">
                            <div className="h-4 w-32 rounded bg-primary bg-opacity-30"></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
