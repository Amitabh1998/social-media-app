import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const Details = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await api.getDetails(id);
        setItem(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };
    fetchDetails();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      {/* Add more details here */}
    </div>
  );
};

export default Details;