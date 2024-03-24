import axios from 'axios'

export const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
}

export const fetchMembersDetail = async (memberId: number) => {
  // return axios
  //   .get(`https://jsonplaceholder.typicode.com/users/${memberId}`)
  //   .then((response) => response.data)
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${memberId}`)
  return response.data
}

export const fetchMembersPosts = async (memberId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${memberId}`)
  return response.data
}

export const fetchMembersPostsDetail = async (postId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  return response.data
}

export const fetchMembersAlbums = async (memberId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${memberId}`)
  return response.data
}

export const fetchMembersAlbumsDetail = async (albumId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  return response.data
}

export const fetchMembersTodos = async (memberId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${memberId}`)
  return response.data
}
