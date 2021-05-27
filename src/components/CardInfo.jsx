import React, { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import { CardNav } from './CardNav'
import CardBuy from './CardBuy'

const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Roboto;
      text-decoration: none;
      color:black;
      height: 100vh;
      width: 100%;


`
const Card = styled.div`
      display: flex;
      flex-direction: column;
      background: #E1E1E1;
      box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 280px;
      }
`
const CardsUserInfo = styled.div`

      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  
`
const CardsButtons = styled.div`
      display:flex;
      justify-content: space-around;
`
const CardButtonBack = styled.button`
      border: none;
      color: white;
      border-radius: 20px;
      background-color: black;
      font-size: larger;
      padding: 5px 10px;
`
const CardButtonBuy = styled.button`
      border: none;
      color: white;
      border-radius: 20px;
      background-color: #49B240;
      font-size: larger;
      padding: 5px 10px;
      ::hover{
        background-color: grey;
      }
`
// const user = {
//   username: 'Whil',
//   coins: 10,
// }

export const CardInfo = ({ data, router ,username,coins}) => {

  const { id, image, name, status, species, gender, created, origin } = data
  const [validBuy, setValidBuy] = useState(null);
  const [newCoins, setCoins] = useState(coins)
  console.log(username)
  useEffect(() => {
    localStorage.setItem('coins', coins);
  }, [coins]);
  return (
    <>
      <CardNav name={username} newCoins={newCoins}/>
      <Container>
        <Card>
          <div>
            <img
              src={image}
              alt={name}

            />
          </div>
          <CardsUserInfo>
            <div>
              <h2>{name}</h2>
              <ul>
                <li>Status:{status}</li>
                <li>Species:{species}</li>
                <li>Gender:{gender}</li>
                <li>Origin:{origin?.name}</li>
                <li>Created:{created}</li>
              </ul>
            </div>
            <CardsButtons>
              <CardButtonBack onClick={() => router.back()}>Back</CardButtonBack>
              <CardButtonBuy onClick={() => setValidBuy(true)}>Buy</CardButtonBuy>
            </CardsButtons>
          </CardsUserInfo>
        </Card>
      </Container>
      {validBuy && <CardBuy 
      coins={coins} setCoins={setCoins} cardId={id} setValidBuy={setValidBuy} />}

    </>
  )
}
