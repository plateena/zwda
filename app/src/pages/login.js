'use client'
import { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { login, logout } from '@/redux/features/auth-slice'
import { useRouter } from 'next/router'

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

    const handleLogout = async () => {
        try {
            await signOut({ callbackUrl: '/login' })
            dispatch(logout())
        } catch (error) {
            console.error('Failed to sign out:', error)
        }
    }

    return (
        <div>
            {session.status === 'loading' && <div>Loading...</div>}{' '}
            {/* Handle loading state */}
            {session.status === 'error' && (
                <div>Error: Failed to fetch session</div>
            )}{' '}
            {/* Handle error state */}
            {session.status == 'authenticated' && (
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
            {session.status == 'unauthenticated' && (
                <button onClick={() => signIn('google')}>
                    Sign in with Google
                </button>
            )}
        </div>
    )
}
