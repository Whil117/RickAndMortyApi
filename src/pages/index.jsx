
import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import styled from '@emotion/styled'
import { CardNav } from '../components/CardNav'

const Cards = styled.div`
      font-family: Roboto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
`

const index = () => {
  const [character, setCharacter] = useState('')
  const [data, setData] = useState([]);

  const GetCharacters = async () => {
    const url = `https://rickandmortyapi.com/api/character`
    const res = await fetch(url)
    const { results } = await res.json()
    setData(results)
  }

  useEffect(() => {
    GetCharacters()
  }, [])

  return (
    <>
      <CardNav useCategory={[character,setCharacter]} />
      <Cards >
        {data.filter(item => character === '' ? true : item.name.includes(character)).map((item) => (
          <Card key={item.id} category={item} />
        ))}
      </Cards>
    </>
  )
}
export default index
