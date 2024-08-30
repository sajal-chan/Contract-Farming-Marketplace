import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate();
  const handleFarmerClick=()=>{
      navigate('/farmer');
  }
  const handleContractorClick=()=>{
      navigate('/farmer-list');
  }
  return (
    <div className="flex h-screen flex-col justify-center items-center bg-gray-100">
      <button
      onClick={handleFarmerClick} 
      className="mb-6 w-64 h-16 text-lg bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
        Farmer
      </button>
      <button 
      onClick={handleContractorClick}
      className="w-64 h-16 text-lg bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
        Contractor
      </button>
    </div>
  )
}

export default Home