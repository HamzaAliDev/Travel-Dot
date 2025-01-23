import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function PrivateRoutes({ Component }) {
    const { user } = useAuthContext()
        // Check if user or user.roles is undefined
        if (!user || !user.roles || !Array.isArray(user.roles)) {
            return <Navigate to='/' />
        }
    
        // Check if the user has the 'admin' role
        const isAdmin = user.roles.includes('admin')
    
        if (!isAdmin) { 
            return <Navigate to='/' /> 
        }

    return (
        <Component />
    )
}
