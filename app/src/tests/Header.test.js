// Import necessary dependencies and setup for testing
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from '../components/Header' // Adjust the import path based on your project structure
import { useDispatch, useSelector } from 'react-redux'
import configureStore from 'redux-mock-store'

// Create a mock Redux store using redux-mock-store
const mockStore = configureStore([])

// Mock the Redux store state
const initialState = {
    authReducer: {
        value: {
            isAuth: false,
            user: null,
        },
    },
}

// Mock the useDispatch hook
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}))

// Mock the signOut function
const mockSignOut = jest.fn()

// Mock the next-auth/react module
jest.mock('next-auth/react', () => ({
    ...jest.requireActual('next-auth/react'),
    signOut: mockSignOut,
}))

// Test cases
describe('Header', () => {
    beforeEach(() => {
        // Clear the mock function's call history before each test
        useDispatch.mockClear()
        mockSignOut.mockClear()
    })

    test('renders header with navigation links and login button when user is not authenticated', () => {
        render(
            <Provider store={mockStore(initialState)}>
                <Header />
            </Provider>
        )

        expect(screen.getByText('This is the header')).toBeInTheDocument()
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('About')).toBeInTheDocument()
        expect(screen.getByText('Login')).toBeInTheDocument()
    })

    test('renders header with navigation links, user welcome message, and logout button when user is authenticated', () => {
        const authenticatedState = {
            isAuth: true,
            user: { data: { user: { name: 'Test User' } } },
        }

        useSelector.mockReturnValue(authenticatedState)

        render(<Header />)

        expect(screen.getByText('This is the header')).toBeInTheDocument()
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('About')).toBeInTheDocument()
        expect(screen.getByText('Welcome, Test User')).toBeInTheDocument()
        expect(screen.getByText('Logout')).toBeInTheDocument()
    })

})
