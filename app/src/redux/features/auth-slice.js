import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        isAuth: false,
        user: null,
        token: null,
    },
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            return initialState
        },
        login: (state, action) => {
            return {
                value: {
                    isAuth: true,
                    user: action.payload.data.user,
                    token: action.payload.token,
                },
            }
        },
    },
})

export const { logout, login } = auth.actions
export default auth.reducer
