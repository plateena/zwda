import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/redux/features/auth-slice'

export const store = configureStore({
    reducer: {
        authReducer,
    },
})
