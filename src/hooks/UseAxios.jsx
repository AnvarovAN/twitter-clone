import axios from 'axios';
import {useEffect,useState} from 'react'

const useAxios = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const axiosData = async (url)=>{
        setLoading(true)
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            setError(error)
        }
        finally
        {
            setLoading(false)
        }
    }


    useEffect(()=>{
        axiosData()
    },[url])
  return {data, error, loading}
}

export default useAxios