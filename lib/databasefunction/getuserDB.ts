import prisma from "../prisma"

export const getUserFromDb = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {email: email}
        })
        return user
    } catch (error) {
        console.log(error)
        return null
    }
}