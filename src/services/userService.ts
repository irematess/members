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
