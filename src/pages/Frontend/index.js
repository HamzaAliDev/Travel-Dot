import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Destinations from './Destinations'
import Blogs from './Blogs'
import Contact from './Contact'
import Bookings from './Bookings'

export default function Frontend() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/bookings' element={<Bookings/>} />
        {/* <Route path='/add-todo' element={<AddTodo />} /> */}
    </Routes>
  )
}
