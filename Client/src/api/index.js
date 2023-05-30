import axios from 'axios';

const API = axios.create( {baseURL: process.env.REACT_APP_URL });
console.log(process.env.baseURL);

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

//posts
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

//auth
export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);

//users
export const getUsers = () => API.get('/users'); //FETCH_all
export const deleteUser = (id) => API.delete(`/users/${id}`)
export const blockUser = (id) => API.patch(`/users/blockuser/${id}`)
// BLOCK_USER

