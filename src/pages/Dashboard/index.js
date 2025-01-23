import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Destination from './Destination'
import Offer from './Offer'
import Blog from './Blog'

export default function Dashboard() {
;
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />} />
        <Route path='offer' element={<Offer />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
    </>
  )
}
