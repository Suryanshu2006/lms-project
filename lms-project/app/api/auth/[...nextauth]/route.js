import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { connectToDatabase } from '../../../../lib/dbConnect'
import User from '../../../../models/User'

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectToDatabase()
        await User.findOneAndUpdate({ email: user.email }, { name: user.name, email: user.email, image: user.image }, { upsert: true, new: true })
        return true
      } catch (e) {
        console.error('SignIn error', e)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }
