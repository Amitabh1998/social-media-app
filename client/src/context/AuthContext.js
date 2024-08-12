import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.setToken(token);
      fetchUser();
    }
  }, []);

  const fetchUser = async () => {
    try {
      const userData = await api.getCurrentUser();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const login = async (email, password) => {
    const { token } = await api.login(email, password);
    localStorage.setItem('token', token);
    api.setToken(token);
    await fetchUser();
  };

  const logout = () => {
    localStorage.removeItem('token');
    api.setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};