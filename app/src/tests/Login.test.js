// Import necessary dependencies and setup for testing
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import LoginPage from '../pages/login' // Adjust the import path based on your project structure
import Header from '../components/Header'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './../redux/features/auth-slice'
import { useRouter } from 'next/router'
// import '@testing-library/jest-dom'

// Mock next-auth/react, react-redux, and next/router modules
jest.mock('next-auth/react', () => ({
    useSession: jest.fn(),
    signIn: jest.fn(),
    signOut: jest.fn(),
}))

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}))

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}))

// Test cases
describe('LoginPage', () => {
    beforeEach(() => {
        // Reset mock functions before each test
        useSession.mockReturnValue({})
        useSelector.mockReturnValue({})
        useDispatch.mockReturnValue(jest.fn())
        useRouter.mockReturnValue({})
    })

    test('renders login form with sign-in button when unauthenticated', () => {
        useSession.mockReturnValueOnce({ status: 'unauthenticated' })

        render(<LoginPage />)

        expect(screen.getByText('Sign in with Google')).toBeInTheDocument()
    })

    test('renders loading message when session status is loading', () => {
        useSession.mockReturnValueOnce({ status: 'loading' })

        render(<LoginPage />)

        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    test('renders error message when session status is error', () => {
        useSession.mockReturnValueOnce({ status: 'error' })

        render(<LoginPage />)

        expect(
            screen.getByText('Error: Failed to fetch session')
        ).toBeInTheDocument()
    })

    test('redirects to home page after successful authentication', () => {
        const push = jest.fn()
        useRouter.mockReturnValueOnce({ push })
        useSession.mockReturnValueOnce({ status: 'authenticated' })

        render(<LoginPage />)

        expect(push).toHaveBeenCalledWith('/')
    })
})
