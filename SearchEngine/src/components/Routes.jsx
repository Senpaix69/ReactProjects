import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Result from './Result'

const Rootes = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route exact path='/search' element={<Result />}>
        </Route>
        <Route exact path='/news' element={<Result />}>
        </Route>
        <Route exact path='/videos' element={<Result />}>
        </Route>
        <Route exact path='/image' element={<Result />}>
        </Route>
      </Routes>
    </div>
  )
}

export default Rootes
