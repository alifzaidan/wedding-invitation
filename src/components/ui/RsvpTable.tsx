'use client';

import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function RsvpTable() {
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/rsvp`, fetcher);

    const rsvp = {
        data: data?.data || [],
    };

    const [searchTerm, setSearchTerm] = useState('');

    const filteredRsvp = rsvp.data.filter((rsvp: any) => rsvp.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <div className="relative flex flex-1 my-4">
                <input
                    type="text"
                    placeholder="Cari nama..."
                    className="w-full bg-primary text-secondary border border-secondary py-3 pl-12 md:text-md text-sm outline-2 rounded-full placeholder:text-secondary placeholder:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IoSearch className="absolute left-4 top-3 h-5 w-5 text-secondary" />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-primary">
                    <thead className="text-sm uppercase">
                        <tr className="bg-primary text-secondary border-b border-secondary text-center md:text-base text-sm">
                            <th className="py-3 px-6">No</th>
                            <th className="py-3 px-6">Nama</th>
                            <th className="py-3 px-6">Jumlah Kehadiran</th>
                            <th className="py-3 px-6">Alamat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRsvp.length > 0
                            ? filteredRsvp.map((rsvp: any, index: number) => (
                                  <tr key={rsvp.id} className="bg-secondary text-primary border-b border-primary md:text-sm text-xs">
                                      <td className="py-3 px-6 text-center">{index + 1}</td>
                                      <td className="py-3 px-6">{rsvp.name}</td>
                                      <td className="py-3 px-6 text-center">{rsvp.numAttendees}</td>
                                      <td className="py-3 px-6">{rsvp.address}</td>
                                  </tr>
                              ))
                            : rsvp.data?.map((rsvp: any, index: number) => (
                                  <tr key={rsvp.id} className="bg-secondary text-primary border-b border-primary md:text-base text-sm">
                                      <td className="py-3 px-6 text-center">{index + 1}</td>
                                      <td className="py-3 px-6">{rsvp.name}</td>
                                      <td className="py-3 px-6 text-center">{rsvp.numAttendees}</td>
                                      <td className="py-3 px-6">{rsvp.address}</td>
                                  </tr>
                              ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
