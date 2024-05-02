import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-white">
                            {/* Your logo or brand name */}
                            <Link href="/">
                                <span className="font-semibold text-xl">
                                    Your Logo
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            {/* Navigation links */}
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/">
                                    <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                        Home
                                    </span>
                                </Link>
                                <Link href="/about">
                                    <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                        About
                                    </span>
                                </Link>
                                {/* Add more navigation links as needed */}
                            </div>
                        </div>
                    </div>
                    {/* Right-aligned navigation items (e.g., login/logout) */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* Your login/logout buttons */}
                            <Link href="/login">
                                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Login
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
