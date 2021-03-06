
import { useEffect, useState } from 'react'

export const GetCharacters = (value) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const useFetch = async (value) => {
      const url = `https://rickandmortyapi.com/api/character?page=${value}`
      const res = await fetch(url)
      const { results } = await res.json()
      setData(results)
    }
    setTimeout(() => {
      const isValue = value ? useFetch(value) : null
      return isValue
    }, 300);
  }, [value])

  return data
}
