import '@/styles/globals.css'
import SessionProvider from '@/SessionProvider'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { ReduxProvider } from '@/redux/provider'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
    return (
        <>
            <SessionProvider>
                <ReduxProvider>
                    <Navbar />
                    <Component {...pageProps} />
                </ReduxProvider>
            </SessionProvider>
        </>
    )
}
