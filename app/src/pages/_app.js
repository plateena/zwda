import '@/styles/globals.css'

import SessionProvider from '@/SessionProvider'
import { ReduxProvider } from '@/redux/provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
    return (
        <>
            <SessionProvider>
                <ReduxProvider>
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow flex items-center justify-center mx-12 py-8 mb-8">
                            <Component {...pageProps} />
                        </main>
                        <Footer />
                    </div>
                </ReduxProvider>
            </SessionProvider>
        </>
    )
}
