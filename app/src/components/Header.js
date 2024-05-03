import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { logout } from '@/redux/features/auth-slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import useAuth from '@/utils/auth'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const auth = useAuth()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            await signOut({ callbackUrl: '/login' })
            dispatch(logout())
        } catch (error) {
            console.error('Failed to sign out:', error)
        }
    }

    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <Link href="/">
                        <span className="text-white font-bold text-xl cursor-pointer">
                            This is the header
                        </span>
                    </Link>
                </div>

                <nav className="space-x-4">
                    <Link href="/">
                        <span className="text-white hover:text-gray-300 cursor-pointer">
                            Home
                        </span>
                    </Link>
                    {auth.isLoggedIn() ? (
                        <Link href="/admin/users">
                            <span className="text-white hover:text-gray-300 cursor-pointer">
                                Users
                            </span>
                        </Link>
                    ) : null}
                </nav>

                {/* Auth Links */}
                <div className="flex items-center space-x-4">
                    {auth.isLoggedIn() ? (
                        <>
                            <span className="text-white">
                                Welcome, {auth.getUser().name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="text-white hover:text-gray-300"
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </button>
                        </>
                    ) : router.pathname !== '/login' ? (
                        <Link href="/login">
                            <span className="text-white hover:text-gray-300 cursor-pointer">
                                <FontAwesomeIcon icon={faUser} /> Login
                            </span>
                        </Link>
                    ) : null}
                </div>
            </div>
        </header>
    )
}

export default Header
