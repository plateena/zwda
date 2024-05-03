import UserList, { getServerSideProps } from '@/components/admin/users-list'
import { render } from '@testing-library/react'

const unmockedFetch = global.fetch

describe('User list components', () => {
    it('should call the api on load', async () => {
        const apiUrl = 'https://reqres.in/api/users'
        const mockData = ['hello']
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ test: 100 }),
            })
        )

        await getServerSideProps()

        expect(global.fetch).toHaveBeenCalledWith(apiUrl)

        global.fetch = unmockedFetch
    })
})
