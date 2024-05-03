import { getServerSideProps } from '@/pages/admin/users'

const unmockedFetch = global.fetch

describe('User list components', () => {
    it('should call the api on load', async () => {
        const apiUrl = 'https://reqres.in/api/users?page=1'
        const users = [
            { id: 1, first_name: 'George', last_name: 'Washington' },
            { id: 2, first_name: 'John', last_name: 'Adams' },
            { id: 3, first_name: 'Thomas', last_name: 'Jefferson' },
            { id: 4, first_name: 'James', last_name: 'Madison' },
            { id: 5, first_name: 'George', last_name: 'Bush' },
        ]
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ data: users }),
            })
        )

        await getServerSideProps()

        expect(global.fetch).toHaveBeenCalledWith(apiUrl)

        global.fetch = unmockedFetch
    })
})
