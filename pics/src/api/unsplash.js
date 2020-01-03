import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    'Client-ID e7fd36164c583e37f20f8e9ae53f33a6c627436b047dd44814b3e7d56b1e7956'

  }

})
