'use server';

import prisma from './db';

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
