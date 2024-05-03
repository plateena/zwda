import UserCard from './user-card'

export default function UserList({ users }) {
    return (
        <>
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="flex flex-wrap justify-center -mx-4">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4"
                        >
                            <UserCard user={user} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
