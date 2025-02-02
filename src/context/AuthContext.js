import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useCallback, useContext, useEffect, useReducer, useState } from 'react'
import { auth, firestore } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Auth = createContext();
const initialState = { isAuthenticated: false, user: {} }

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_LOGGED_IN':
            return { isAuthenticated: true, user: payload.user }
        case 'SET_PROFILE':
            return { ...state, user: payload.user }
        case 'SET_LOGGED_OUT':
            return initialState;
        default:
            return state
    }
}
export default function AuthContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)

    const readProfile = useCallback(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docSnap = await getDoc(doc(firestore, "users", user.uid));
                if (docSnap.exists()) {
                    const currentUser = docSnap.data();
                    dispatch({ type: 'SET_LOGGED_IN', payload: { user: currentUser } });
                    // console.log("Document data:", currentUser);
                }

            } else {
                dispatch({ type: 'SET_LOGGED_OUT' })
            }
        });
        setTimeout(() => {
            setIsAppLoading(false)
        }, 3000)
    }, [])

    useEffect(() => { readProfile() }, [readProfile])

    const handleLogout = async() => {
        try {
            await signOut(auth); // Sign out from Firebase
            dispatch({ type: 'SET_LOGGED_OUT' }); // Update local state
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }
    console.log(state)

    return (
        <Auth.Provider value={{ ...state, dispatch, isAppLoading, setIsAppLoading, handleLogout }}>
            {children}
        </Auth.Provider>
    )
}

export const useAuthContext = () => useContext(Auth)
