// utils/auth.js

import { useSelector } from 'react-redux'

const useAuth = () => {
    const authData = useSelector((state) => state.value)

    const getUser = () => authData.user
    const isLoggedIn = () => authData.isAuth

    return { getUser, isLoggedIn }
}

export default useAuth
