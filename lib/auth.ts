import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import prisma from './prisma'
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from './zod'
import bcrypt from 'bcryptjs'
import { getUserFromDb } from './databasefunction/getuserDB'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          id: "email",
          type: "email",
          name: "email",
          placeholder: "m@example.com",
          required: true,
        },
        password: {
          id: "password",
          type: "password",
          name: "password",
          placeholder: "*****",
          required: true,
        },
      },
      authorize: async (credentials) => {
        try {
          let user = null

          console.log("credentials:", credentials)  // ← Tambahkan ini
          console.log("credentials type:", typeof credentials)  // ← Dan ini

          const { email, password } = await signInSchema.parseAsync(credentials)

          // logic to salt and hash password
          const pwHash = bcrypt.hash(password, 10)

          // logic to verify if the user exists
          user = await prisma.user.findUnique({
            where: { email: email },
          })

          if (!user) {
            throw new Error("Invalid credentials.")
          }

          const isValid = await bcrypt.compare(password, user.password as string)

          if (!isValid) {
            throw new Error("Invalid credentials.")
          }

          // return JSON object with the user data
          return user
        } catch (error) {
          console.log(error)
          return null
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id as string
      }
      return session
    }
  }

})