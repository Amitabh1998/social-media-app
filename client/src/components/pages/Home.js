import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  const [recentContent, setRecentContent] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchRecentContent = async () => {
      try {
        const data = await api.getRecentContent();
        setRecentContent(data);
      } catch (error) {
        console.error('Error fetching recent content:', error);
      }
    };
    fetchRecentContent();
  }, []);

  return (
    <div>
      <h1>Welcome to Our Web Application</h1>
      {user ? (
        <p>Hello, {user.username}!</p>
      ) : (
        <p>Please login or register to access all features.</p>
      )}
      <h2>Recent Content</h2>
      <ul>
        {recentContent.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;