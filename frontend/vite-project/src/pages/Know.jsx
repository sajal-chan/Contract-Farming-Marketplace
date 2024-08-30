import React from 'react';
import { useParams } from 'react-router-dom';

const Know = () => {
  const { id } = useParams(); // Get the farmer ID from the URL
  return (
    <div>
      <h1>Farmer Details for ID: {id}</h1>
      {/* Fetch and display more details based on the ID */}
    </div>
  );
};

export default Know;