'use client'
import { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '@/redux/features/auth-slice'

export default function LoginPage() {
    const dispatch = useDispatch()
    const session = useSession() // Added status for error handling
    const authData = useSelector((state) => state.authReducer.value)

    useEffect(() => {
        if (session) {
            dispatch(login(session))
        }
    }, [session, dispatch])

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
            {status === 'loading' && <div>Loading...</div>}{' '}
            {/* Handle loading state */}
            {status === 'error' && (
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
