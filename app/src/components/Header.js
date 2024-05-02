import Link from 'next/link'

const Header = () => {
    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <span className="text-white font-bold text-xl">
                            This is the header
                        </span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="space-x-4">
                    <Link href="/">
                        <span className="text-white hover:text-gray-300">
                            Home
                        </span>
                    </Link>
                    <Link href="/about">
                        <span className="text-white hover:text-gray-300">
                            About
                        </span>
                    </Link>
                    {/* Add more navigation links as needed */}
                </nav>

                {/* Auth Links */}
                <div>
                    <Link href="/login">
                        <span className="text-white hover:text-gray-300">
                            Login
                        </span>
                    </Link>
                    {/* Add more auth links as needed */}
                </div>
            </div>
        </header>
    )
}

export default Header
