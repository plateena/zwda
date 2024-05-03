import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '@/redux/features/auth-slice'
import { signIn, signOut, useSession } from 'next-auth/react'
import useAuth from '@/utils/auth'

export default function Home() {
    const auth = useAuth()
    const dispatch = useDispatch()
    return (
        <>
            {auth.isLoggedIn() ? (
                <span> Welcome, {auth.getUser()?.name}</span>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </>
    )
}
