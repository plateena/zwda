'use client'

import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            return { user, account, profile }
        },
        async signOut() {
            // store.dispatch(logout());
            return true
        },
        async session({ session, token, user }) {
            session.user.id = token.id
            session.accessToken = token.accessToken
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.id = user.id
            }
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
    },
})
