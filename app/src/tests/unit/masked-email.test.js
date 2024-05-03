import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import UserCard from '@/components/admin/user-card'

describe('UserCard component', () => {
    const user = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        avatar: 'example.com/avatar.jpg',
    }

    test('should mask email by default', () => {
        const { getByText } = render(<UserCard user={user} />)
        const maskedEmail = getByText(/j\*+oe@example\.com/)
        expect(maskedEmail).toBeInTheDocument()
    })

    test('should unmask email when eye icon button is clicked', () => {
        const { getByText, getByTestId } = render(<UserCard user={user} />)
        const eyeIcon = getByTestId('eye-icon')

        fireEvent.click(eyeIcon)

        const unmaskedEmail = getByText(/john\.doe@example\.com/)
        expect(unmaskedEmail).toBeInTheDocument()
    })
})
