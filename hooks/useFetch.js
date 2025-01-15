import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'x-rapidapi-key': process.env.EXPO_PUBLIC_RAPID_API_KEY,
      'x-rapidapi-host': 'jsearch.p.rapidapi.com',
    },
    params: {
      ...query,
    },
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.request(options)
      setData(response.data)
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || 'Something went wrong'
      console.error('Error:', errorMessage)
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading, error }
}

export default useFetch
