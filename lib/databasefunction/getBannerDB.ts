'use server'

import { del } from "@vercel/blob"
import prisma from "../prisma"


export const getBannerDB = async () => {
    try {
        const banner = await prisma.banner.findMany({
            where: {
                is_active: true
            },
            orderBy: {
                position: 'asc'
            }
        })
        return banner
    } catch (error) {
        throw new Error("Failed to fetch banner")
    }
}


export const deleteBannerDB = async (id: number) => {
    try{
        const banner = await prisma.banner.delete({
            where: {
                id: id
            }
        })

        const blob = await del(banner.image_url, {
            token: process.env.BLOB_READ_WRITE_TOKEN
        })

        return blob
    } catch (error) {
        throw new Error("Failed to delete banner")
    }
}