import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '@/redux/features/auth-slice'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
    const authData = useSelector((state) => state.value)
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            await signOut({ callbackUrl: '/' })
            dispatch(logout())
        } catch (error) {
            console.error('Failed to sign out:', error)
        }
    }
    return (
        <>
            {authData.isAuth ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <Link href="/login">Login</Link>
            )}
            Hello
        </>
    )
}
