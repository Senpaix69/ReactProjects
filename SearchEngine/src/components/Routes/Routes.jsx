import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Results from '../Results/Results';

const Rootes = ({ darkTheme }) => {
  return (
    <div className='Routess' style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Routes>
        <Route exact path='/'>
        </Route>
        <Route exact path='/search' element={<Results darkTheme={darkTheme} />}>
        </Route>
        <Route exact path='/news' element={<Results darkTheme={darkTheme} />}>
        </Route>
        <Route exact path='/videos' element={<Results darkTheme={darkTheme} />}>
        </Route>
        <Route exact path='/image' element={<Results darkTheme={darkTheme} />}>
        </Route>
      </Routes>
    </div>
  )
}

export default Rootes;
