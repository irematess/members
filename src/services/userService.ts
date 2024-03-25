import axios from 'axios'

export const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
}

export const fetchUsersDetail = async (userId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  return response.data
}

export const fetchUsersPosts = async (userId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  return response.data
}

export const fetchUsersPostsDetail = async (postId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  return response.data
}

export const fetchUsersAlbums = async (userId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
  return response.data
}

export const fetchUsersAlbumsDetail = async (albumId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  return response.data
}

export const fetchUsersTodos = async (userId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
  return response.data
}
