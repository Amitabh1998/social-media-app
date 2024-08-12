import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await api.getProfile(id || user.id);
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, [id, user]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.username}'s Profile</h1>
      {user && user.id === profile.id && (
        <div>
          <h2>Personal Information</h2>
          <p>Email: {profile.email}</p>
          {/* Add more personal information here */}
        </div>
      )}
      <h2>Public Information</h2>
      {/* Add public profile information here */}
    </div>
  );
};

export default Profile;