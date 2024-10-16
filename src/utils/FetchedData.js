import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'f8a27e7373msh314bdda978dfa51p1ae9e8jsn3fd132664c64',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const FetchedData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data
}
