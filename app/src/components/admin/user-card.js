import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default function UserCard({ user }) {
    const [masked, setMasked] = useState(true)

    // Function to mask email
    const maskEmail = (email) => {
        const [username, domain] = email.split('@')
        const maskedUsername = `${username.charAt(0)}${'*'.repeat(Math.max(0, username.length - 3))}${username.slice(-2)}`
        return `${maskedUsername}@${domain}`
    }

    return (
        <div className="border border-gray-300 rounded-lg p-4 m-4 max-w-sm">
            <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-32 h-32 rounded-lg mb-4"
            />
            <div>
                <h2 className="text-lg font-semibold mb-2">
                    {user.first_name} {user.last_name}
                </h2>
                <div className="flex items-center">
                    <p className="mt-2 flex-grow">
                        {masked ? maskEmail(user.email) : user.email}
                    </p>
                    <button
                        data-testid="eye-icon"
                        onClick={() => setMasked(!masked)}
                        className="text-blue-500 hover:underline"
                    >
                        <FontAwesomeIcon icon={masked ? faEyeSlash : faEye} />
                    </button>
                </div>
            </div>
        </div>
    )
}
