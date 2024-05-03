import { filterUser } from '@/pages/admin/users'

describe('filterUser', () => {
    test('should filter users whose first name starts with "G" or last name starts with "W"', () => {
        const users = [
            { id: 1, first_name: 'George', last_name: 'Washington' },
            { id: 2, first_name: 'John', last_name: 'Adams' },
            { id: 3, first_name: 'Thomas', last_name: 'Jefferson' },
            { id: 4, first_name: 'James', last_name: 'Madison' },
            { id: 5, first_name: 'George', last_name: 'Bush' },
        ]

        const filteredUsers = filterUser(users)

        expect(filteredUsers).toEqual([
            { id: 1, first_name: 'George', last_name: 'Washington' },
            { id: 5, first_name: 'George', last_name: 'Bush' },
        ])
    })

    test('should return an empty array if no users match the criteria', () => {
        const users = [
            { id: 1, first_name: 'John', last_name: 'Doe' },
            { id: 2, first_name: 'Jane', last_name: 'Doe' },
        ]

        const filteredUsers = filterUser(users)
        expect(filteredUsers).toEqual([])
    })
})
