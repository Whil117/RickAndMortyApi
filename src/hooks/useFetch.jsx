import React, { useEffect, useState } from 'react'

const useFetch = () => {

  const GetCharacters = async () => {
    const url = `https://rickandmortyapi.com/api/character`
    const res = await fetch(url)
    const { results } = await res.json()
    console.log(results)
    return results
  }

  useEffect(() => {
    GetCharacters()
    console.log('datos')
  }, [])

}


export default useFetch