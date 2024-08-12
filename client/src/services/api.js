import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.setToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default {
  // Auth
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (userData) => api.post('/auth/register', userData),
  getCurrentUser: () => api.get('/users/me'),

  // Users
  getProfile: (id) => api.get(`/users/${id}`),
  updateProfile: (id, data) => api.put(`/users/${id}`, data),

  // Domain Objects
  search: (query) => api.get('/domain-objects/search', { params: { q: query } }),
  getDetails: (id) => api.get(`/domain-objects/${id}`),
  getRecentContent: () => api.get('/domain-objects/recent'),

  // Add more API calls as needed
};