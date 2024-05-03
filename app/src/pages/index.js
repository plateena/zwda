import Link from 'next/link'
import useAuth from '@/utils/auth'

export default function Home() {
    const auth = useAuth()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {auth.isLoggedIn() ? (
                <div className="flex flex-col items-center">
                    <img
                        src={auth.getUser()?.image}
                        alt={auth.getUser()?.name}
                        className="w-32 h-32 rounded-full mb-4"
                    />
                    <span className="text-lg font-semibold mb-2">
                        Welcome, {auth.getUser()?.name}
                    </span>
                </div>
            ) : (
                <div>
                    <h1 className="text-4xl font-semibold mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                        reprehenderit enim labore culpa sint ad nisi Lorem
                        pariatur mollit ex esse exercitation amet. Nisi anim
                        cupidatat excepteur officia. Reprehenderit nostrud
                        nostrud ipsum Lorem est aliquip amet voluptate voluptate
                        dolor minim nulla est proident. Nostrud officia pariatur
                        ut officia. Sit irure elit esse ea nulla sunt ex
                        occaecat reprehenderit commodo officia dolor Lorem duis
                        laboris cupidatat officia voluptate. Culpa proident
                        adipisicing id nulla nisi laboris ex in Lorem sunt duis
                        officia eiusmod. Aliqua reprehenderit commodo ex non
                        excepteur duis sunt velit enim. Voluptate laboris sint
                        cupidatat ullamco ut ea consectetur et est culpa et
                        culpa duis.
                    </p>
                    <Link href="/login">
                        <span className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                            Login
                        </span>
                    </Link>
                </div>
            )}
        </div>
    )
}
