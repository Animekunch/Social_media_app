import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your API base URL
});

export const login = (credentials) => api.post('/auth/login', credentials);
export const signup = (data) => api.post('/auth/signup', data);
export const fetchPosts = () => api.get('/posts');
export const createPost = (post) => api.post('/posts', post);
// Add more API calls as needed
