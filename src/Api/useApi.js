import axios from "axios"
import {decryptData} from "../EssentilaMethods/Decryption"
import { useEffect, useState } from "react"

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const apiCall = (endPoint, options) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get(axios.defaults.baseURL + "/" + endPoint, options)
        const decrypt = decryptData(response.data.data)
        setData(decrypt)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }

    fetchData()
  }, [endPoint])


  return {data, error, loading}
}

export default apiCall
