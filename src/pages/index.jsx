
import React, { useState } from 'react'
import { Card } from '../components/Card'
import styled from '@emotion/styled'
import { CardNav } from '../components/CardNav'
import { CardPages } from '../components/CardPages'
import { GetCharacters } from '../hooks/useFetch'

const Cards = styled.div`
      font-family: Roboto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
`

const index = () => {
  const [character, setCharacter] = useState('')
  const [value, setValue] = useState(1);
  const data = GetCharacters(value)

  return (
    <>
      <CardNav useCategory={[character, setCharacter]} />
      <CardPages value={value} setValue={setValue} />
      <Cards >
        {data.filter(item => character === '' ? true : item.name.includes(character)).map((item) => (
          <Card key={item.id} category={item} />
        ))}
      </Cards>
    </>
  )
}
export default index
