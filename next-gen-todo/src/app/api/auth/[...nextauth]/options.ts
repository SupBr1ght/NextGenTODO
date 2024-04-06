import type { NextAuthOptions } from 'next-auth'
import Google from 'next-auth/providers/google'

export const options: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
}
