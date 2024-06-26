'use client'
import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { login } from '@/redux/features/auth-slice'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function LoginPage() {
    const dispatch = useDispatch()
    const session = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session.status == 'authenticated') {
            dispatch(login(session))
            router.push('/admin/users')
        }
    }, [session, dispatch, router])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {session.status === 'loading' && <div>Loading...</div>}{' '}
            {/* Handle loading state */}
            {session.status === 'error' && (
                <div>Error: Failed to fetch session</div>
            )}{' '}
            {session.status == 'unauthenticated' && (
                <button
                    onClick={() => signIn('google')}
                    className="flex btn-google rounded shadow-md border-sky-800 border-solid border-[1px]"
                >
                    <div className="bg-white rounded-l py-2 px-4">
                        <FontAwesomeIcon
                            icon={faGoogle}
                            className="text-blue-500 text-xl"
                        />
                    </div>
                    <div className="bg-blue-500 text-white rounded-r py-2 px-4 hover:bg-blue-600 transition-colors duration-300 font-black">
                        Sign in with Google
                    </div>
                </button>
            )}
        </div>
    )
}
