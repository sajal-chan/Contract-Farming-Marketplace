
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Farmer from './pages/Farmer';
import Farmer_detail from "./pages/Farmer_detail"
import Know from "./pages/Know"
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/farmer" element={<Farmer />} />
      <Route path="/farmer-list" element={<Farmer_detail/>}/>
      <Route path="/Know-More/:id" element={<Know/>}/>
    </Routes>
  )
}

export default App
//<Route path='/farmer' element={<Farmer />} />