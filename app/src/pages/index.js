import Link from 'next/link'
import useAuth from '@/utils/auth'

export default function Home() {
    const auth = useAuth()
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
