import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Farmer = () => {

  const [f_name,setf_name]=useState('');
  const[crop_type,setCrop_type]=useState('');
  const[location,setLocation]=useState('');
  const[yieldAmount,setYield]=useState(0);
  const[rate,setRate]=useState(0);
 // const [loading,setLoading]=useState(true);
  const navigate=useNavigate();
  const handleSaveFarmer=()=>{
    const data ={f_name, crop_type, location, yieldAmount,rate};

   // setLoading(true);
  axios
    .post('http://localhost:5551/farmer-details/',data)
    .then(()=>{
      //setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
     // setLoading(false);
      alert('An error Occoured while creating the book!!!');
      console.log(error);
    })
  };
  return (
    

    <div className='p-4'>
      <h1 className='text-3xl my-4'>Enter Details</h1>
      
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        
        
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Your Name:</label>
          <input
          type='text'
          value={f_name}
          onChange={(e)=>setf_name(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full '
          />
        </div>


        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>What Crop Do You Want To Sell:</label>
          <input
          type='text'
          value={crop_type}
          onChange={(e)=>setCrop_type(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full '
          />
        </div>


        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Where is Your Farm</label>
          <input
          type='text'
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full '
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>What is the Yield of Your Crop</label>
          <input
          type='number'
          value={yieldAmount}
          onChange={(e)=>setYield(Number(e.target.value))}
          className='border-2 border-gray-500 px-4 py-2 w-full '
          />
        </div>


        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Rate per Quintal</label>
          <input
          type='number'
          value={rate}
          onChange={(e)=>setRate(Number(e.target.value))}
          className='border-2 border-gray-500 px-4 py-2 w-full '
          />
        </div>



        <button className='p-2 bg-sky-300 m-8 ' onClick={handleSaveFarmer}>
          Save
        </button>
    </div>
  </div>



  )}
export default Farmer