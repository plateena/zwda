
import { fetchAllUsers } from '@/pages/admin/users'

describe('fetchAllUsers', () => {
    global.fetch = jest.fn();

    const mockResponse1 = {
        data: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }],
        total_pages: 2
    };

    const mockResponse2 = {
        data: [{ id: 3, name: 'User 3' }, { id: 4, name: 'User 4' }],
        total_pages: 2
    };

    beforeEach(() => {
        fetch.mockClear();
    });

    test('should fetch all pages of users', async () => {
        // Mock the fetch responses for two pages
        fetch
            .mockResolvedValueOnce({ json: () => Promise.resolve(mockResponse1) })
            .mockResolvedValueOnce({ json: () => Promise.resolve(mockResponse2) });

        // Call the fetchAllUsers function
        const allUsers = await fetchAllUsers();

        // Check if fetch is called with correct URLs
        expect(fetch.mock.calls[0][0]).toEqual('https://reqres.in/api/users?page=1');
        expect(fetch.mock.calls[1][0]).toEqual('https://reqres.in/api/users?page=2');

        // Check if all users are returned
        expect(allUsers).toEqual([...mockResponse1.data, ...mockResponse2.data]);
    });
});
