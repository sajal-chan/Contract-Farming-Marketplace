// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// //import { AiOutlineEdit } from 'react-icons/ai';
// //import { BsInfoCircle } from 'react-icons/bs';
// //import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

// const FarmerList = () => {
//   const [farmers, setFarmers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {//this is working
//     setLoading(true);
//     axios.get('http://localhost:5551/farmer-details')
//       .then((response) => {
//         setFarmers(response.data.data); // Assuming 'data.data' structure
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError('Failed to fetch farmer details');
//         setLoading(false);
//       });
//   }, []);



//   const handleClick=()=>{
//     console.log(farmers);
//   };
//   return (
//     <div>
//     <button onClick={handleClick}>Farmer</button>

//     {loading ? (
//       <div>Loading...</div>
//     ) : error ? (
//       <div>{error}</div>
//     ) : (
//       <div>
//         <h1>Farmer List</h1>
//         <ul>
//           {farmers.map(farmer => (
//             <li key={farmer._id}>{farmer.f_name}</li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>
//   );
// };

// export default FarmerList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const FarmerList = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5551/farmer-details')
      .then((response) => {
        setFarmers(response.data.data); // Assuming 'data.data' structure
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to fetch farmer details');
        setLoading(false);
      });
  }, []);

  const handleClick = () => {
    console.log(farmers);
  };
  const handleKnowMore = (farmerId) => {
    console.log("Know more button working !!");
    navigate(`/Know-More/${farmerId}`); // Navigate to the Know-More page with the farmerId
  };

  return (
//     {/* Navigation Bar */}
//   <nav, className="bg-blue-600 shadow-md p-4">
//   <div className="container mx-auto flex justify-between items-center">
//     <span className="text-2xl font-bold text-white">Krishi Setu</span>
//     <div className="space-x-8">
//       <button onClick={handleFarmerClick} className="text-white hover:text-gray-200">
//         Farmer
//       </button>
//       <button onClick={handleContractorClick} className="text-white hover:text-gray-200">
//         Contractor
//       </button>
//     </div>
//   </div>
// </nav>, // Add a comma here


    <div className="p-6 bg-white shadow-lg rounded-lg mx-auto w-full my-10">
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6">
        Log Farmers Data
      </button>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center">Farmer List</h1>
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Farmer Name</th>
                <th className="border px-4 py-2">Crop Type</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Rate (/QTL)</th>
                <th className="border px-4 py-2">Yield</th>
                <th className="border px-4 py-2">Know More</th>
              </tr>
            </thead>
            <tbody>
              {farmers.map((farmer) => (
                <tr key={farmer._id}>
                  <td className="border px-4 py-2 text-center">{farmer.f_name}</td>
                  <td className="border px-4 py-2 text-center">{farmer.crop_type}</td>
                  <td className="border px-4 py-2 text-center">{farmer.location}</td>
                  <td className="border px-4 py-2 text-center">{farmer.rate}</td>
                  <td className="border px-4 py-2 text-center">{farmer.yield}</td>
                  <td className="border px-4 py-2 text-center">
                    <button onClick={handleKnowMore} className='bg-green-900 text-white px-4 py-2 rounded-md'>Know more</button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FarmerList;

