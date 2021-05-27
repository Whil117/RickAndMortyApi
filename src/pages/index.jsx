
import React, { useState,useEffect } from 'react'
import { Card } from '../components/Card'
import styled from '@emotion/styled'
import { CardNav } from '../components/CardNav'
import { CardPages } from '../components/CardPages'
import { GetCharacters } from '../hooks/useFetch'
import { GetCard } from '../components/GetCard'

const Cards = styled.div`
      font-family: Roboto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
`
export const user = {
  username: 'Whil',
  coins: 100,
}

const index = () => {
  const [character, setCharacter] = useState('')
  const [value, setValue] = useState(1);
  const data = GetCharacters(value)
  const { coins, username } = user
  
//   useEffect(() => {
//    localStorage.setItem('coins', coins);

//  }, []);
 
  return (
    <>
      <CardNav name={username} newCoins={coins} />
      <GetCard useCategory={[character, setCharacter]} />
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
