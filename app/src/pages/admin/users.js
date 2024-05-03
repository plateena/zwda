import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons'
import UsersList from '@/components/admin/users-list'

export const getServerSideProps = async () => {
    try {
        // Fetch all users from the API
        const allUsers = await fetchAllUsers()

        return {
            props: { allUsers },
        }
    } catch (error) {
        console.error('Error fetching data:', error)
        return { props: { allUsers: null } }
    }
}

export const fetchAllUsers = async () => {
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

    return allUsers
}

export const filterUser = (users) => {
    return users.filter((user) => {
        return user.first_name.startsWith('G') || user.last_name.startsWith('W')
    })
}

export default function Users({ allUsers }) {
    const [filteredUsers, setFilteredUsers] = useState([])
    const [filtersApplied, setFiltersApplied] = useState(true)

    useEffect(() => {
        // Apply filters when the component mounts
        applyFilters()
    }, [allUsers])

    const applyFilters = () => {
        const filtered = filterUser(allUsers)
        setFilteredUsers(filtered)
    }

    const toggleFilters = () => {
        setFiltersApplied(!filtersApplied)
        if (!filtersApplied) {
            applyFilters()
        } else {
            setFilteredUsers(allUsers)
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <span className="text-left text-[0.8em]">
                    {filtersApplied ? (
                        <>
                            Filter users with a first name starting with "
                            <span className="font-black">G</span>" or a last
                            name starting with "
                            <span className="font-black">W</span>"
                        </>
                    ) : null}
                </span>
                <button
                    onClick={toggleFilters}
                    className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    <FontAwesomeIcon
                        icon={filtersApplied ? faTimes : faFilter}
                        className="mr-2"
                    />
                    {filtersApplied ? 'Clear Filters' : 'Apply Filters'}
                </button>
            </div>
            <UsersList users={filteredUsers} />
        </div>
    )
}
