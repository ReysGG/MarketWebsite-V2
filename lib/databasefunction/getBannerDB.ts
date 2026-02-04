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