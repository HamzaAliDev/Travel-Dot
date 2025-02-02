import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Destination from './Destination'
import Blog from './Blog'
import Bookings from './Bookings'

export default function Dashboard() {
;
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />} />
        <Route path='bookings' element={<Bookings />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
    </>
  )
}
