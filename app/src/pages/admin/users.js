import UsersList from '@/components/admin/users-list'

export const getServerSideProps = async () => {
    try {
        // Initialize an array to store all users
        let allUsers = []
        let page = 1

        // Fetch users until there are no more pages left
        while (true) {
            const apiUrl = `https://reqres.in/api/users?page=${page}`
            const res = await fetch(apiUrl)
            const { data, total_pages } = await res.json()

            // Concatenate the users from the current page to the array
            allUsers = [...allUsers, ...data]

            // If there are more pages, increment the page number
            if (page < total_pages) {
                page++
            } else {
                // Break the loop if no more pages left
                break
            }
        }

        const filteredUsers = allUsers.filter((user) => {
            return (
                user.first_name.startsWith('G') ||
                user.last_name.startsWith('W')
            )
        })

        return {
            props: { users: filteredUsers },
        }
    } catch (error) {
        console.error('Error fetching data:', error)
        return { props: { users: null } }
    }
}

export default function Users({ users }) {
    console.log(users)
    return (
        <>
            <UsersList users={users} />
        </>
    )
}
