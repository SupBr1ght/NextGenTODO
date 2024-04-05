import type { NextAuthOptions } from 'next-auth'
import Github from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'your cool username',
        },
        password: {
          label: 'Password',
          type: 'text',
          placeholder: 'Your cool username is here',
        },
      },
      async authorize(credentials) {
        // * this is where you retrieve users data
        // * And verify with credentials
        const user = { id: '1', name: 'bitch', password: 'pussy  ' }
        if (
          credentials?.username === user.name &&
          credentials.password === user.password
        ) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
}
