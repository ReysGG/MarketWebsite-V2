import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import prisma from './prisma'
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from './zod'
import bcrypt from 'bcryptjs'
import { getUserFromDb } from './databasefunction/getuserDB'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      name: "Credentials",
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          id: "email",
          type:"email",
          name: "Email",
          placeholder: "m@example.com",
          required: true,
        },
        password: {
          id: "password",
          type: "password",
          name: "Password",
          placeholder: "*****",
          required: true,
        },
      },
      authorize: async (credentials) => {
        try {
          // ✅ VALIDASI DULU dengan Zod
          const { success, data } = await signInSchema.safeParseAsync(credentials)
          
          // ✅ Query dengan validated email
          const user = await prisma.user.findUnique({
            where: { email: data?.email },  // Sekarang pasti string yang valid
          })
          if (!user || !user.password) {
      throw new Error("Invalid credentials.")
    }
    
    const isValid = await bcrypt.compare(data?.password as string, user.password)
    if (!isValid) {
      throw new Error("Invalid credentials.")
    }
    
    return user
  } catch (error) {
    console.log(error)
    return null
  }
},
    }),
  ],
  adapter: PrismaAdapter(prisma),

})