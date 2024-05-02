import '@/styles/globals.css'

import SessionProvider from '@/SessionProvider'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { ReduxProvider } from '@/redux/provider'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
    return (
        <>
            <SessionProvider>
                <ReduxProvider>
                    <Header />
                    <Component {...pageProps} />
                </ReduxProvider>
            </SessionProvider>
        </>
    )
}
