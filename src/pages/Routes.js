import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'
import { useAuthContext } from '../context/AuthContext'
import PrivateRoutes from '../components/PrivateRoutes'

export default function Index() {
  const { isAuthenticated } = useAuthContext();
  return (
    <Routes>
      <Route path='/*' element={<Frontend />} />
      <Route path='auth/*' element={!isAuthenticated ? <Auth /> : <Navigate to={'/'} />} />
      <Route path='dashboard/*' element={<PrivateRoutes Component={Dashboard} />} />
    </Routes>
  )
}
