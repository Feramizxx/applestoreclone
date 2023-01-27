import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { SanityClient } from "../../../sanity";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: SanityAdapter(SanityClient)
} 
export default NextAuth(authOptions)