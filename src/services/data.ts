'use server';

import prisma from './db';

const ITEMS_PER_PAGE = 10;

export const getWishes = async () => {
    try {
        const wishes = await prisma.wishes.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return wishes;
    } catch (error) {
        throw new Error('Failed to fetch wishes data');
    }
};

export const saveWish = async (formData: any) => {
    const data = Object.fromEntries(formData.entries());
    const attendees = data.attendees === 'true' ? true : false;

    try {
        await prisma.wishes.create({
            data: {
                name: data.name,
                wish: data.wish,
                attendees: attendees,
            },
        });
        return { success: true };
    } catch (error) {
        return { success: false, message: 'Failed to save wish data' };
    }
};

export const getRsvp = async (query: string, currentPage: number) => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const rsvp = await prisma.rsvp.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                OR: [{ name: { contains: query, mode: 'insensitive' } }, { address: { contains: query, mode: 'insensitive' } }],
            },
            orderBy: {
                createdAt: 'asc',
            },
        });
        return rsvp;
    } catch (error) {
        throw new Error('Failed to fetch rsvp data');
    }
};

export const getRsvpPages = async (query: string) => {
    try {
        const rsvp = await prisma.rsvp.count({
            where: {
                OR: [{ name: { contains: query, mode: 'insensitive' } }, { address: { contains: query, mode: 'insensitive' } }],
            },
        });
        const totalPages = Math.ceil(Number(rsvp) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        throw new Error('Failed to fetch rsvp data');
    }
};

export const saveRsvp = async (formData: any) => {
    const data = Object.fromEntries(formData.entries());
    const attendees = data.attendees === 'true' ? true : false;

    try {
        await prisma.rsvp.create({
            data: {
                name: data.name,
                attendees: attendees,
                numAttendees: parseInt(data.numAttendees),
                address: data.address,
            },
        });
        return { success: true };
    } catch (error) {
        return { success: false, message: 'Failed to save rsvp data' };
    }
};
