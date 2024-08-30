// import React from 'react'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// const Home = () => {
//   const navigate=useNavigate();
//   const handleFarmerClick=()=>{
//       navigate('/farmer');
//   }
//   const handleContractorClick=()=>{
//       navigate('/farmer-list');
//   }
//   return (
//     <div className="flex h-screen flex-col justify-center items-center bg-gray-100">
//       <button
//       onClick={handleFarmerClick} 
//       className="mb-6 w-64 h-16 text-lg bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
//         Farmer
//       </button>
//       <button 
//       onClick={handleContractorClick}
//       className="w-64 h-16 text-lg bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
//         Contractor
//       </button>
//     </div>
//   )
// }

// export default Home



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../logo.png'; // Ensure the path is correct

// const Home = () => {
//   const navigate = useNavigate();

//   const handleFarmerClick = () => {
//     navigate('/farmer');
//   };

//   const handleContractorClick = () => {
//     navigate('/farmer-list');
//   };

//   return (
//     <div className="bg-[#ede8dd] min-h-screen flex flex-col">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 shadow-md p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center space-x-4">
//             <img src={logo} alt="Logo" className="h-20 w-20 object-cover" /> {/* Increased logo size */}
//             <span className="text-2xl font-bold text-white">Contract Farming</span>
//           </div>

//           {/* Navigation Links */}
//           <div className="space-x-8">
//             <button onClick={handleFarmerClick} className="text-white hover:text-gray-200">
//               Farmer
//             </button>
//             <button onClick={handleContractorClick} className="text-white hover:text-gray-200">
//               Contractor
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="flex-grow flex flex-col justify-center items-center">
//         <button
//           onClick={handleFarmerClick}
//           className="mb-6 w-64 h-16 text-lg bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
//         >
//           Farmer
//         </button>
//         <button
//           onClick={handleContractorClick}
//           className="w-64 h-16 text-lg bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
//         >
//           Contractor
//         </button>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center py-4">
//         © 2024 Contract Farming. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png'; // Ensure the path is correct

const Home = () => {
  const navigate = useNavigate();

  const handleFarmerClick = () => {
    navigate('/farmer');
  };

  const handleContractorClick = () => {
    navigate('/farmer-list');
  };

  return (
    <div className="bg-[#ede8dd] min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-white">Krishi Setu</span>
          <div className="space-x-8">
            <button onClick={handleFarmerClick} className="text-white hover:text-gray-200">
              Farmer
            </button>
            <button onClick={handleContractorClick} className="text-white hover:text-gray-200">
              Contractor
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center">
        {/* Logo and Namaste Text */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Logo" className="h-32 w-32  object-cover mb-4" /> {/* Increased logo size */}
          <h1 className="text-4xl font-bold text-gray-800">Namaste!</h1>
        </div>

        <button
          onClick={handleFarmerClick}
          className="mb-6 w-64 h-16 text-lg bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Farmer
        </button>
        <button
          onClick={handleContractorClick}
          className="w-64 h-16 text-lg bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Contractor
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2024 Contract Farming. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

