import React, { useState} from 'react'
import { CardNav } from './CardNav'
import CardBuy from './CardBuy'
import styled from '@emotion/styled'

const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Roboto;
      text-decoration: none;
      color:black;
      height: 100vh;
      width: 100%;
      background-color: #F5F5F5;
`
const Card = styled.div`
      margin: 10px;
      margin-top: 50px;
      width:300px;
      display: flex;
      flex-direction: column;
      background: #F5F5F5;
      box-shadow: 5px 5px 20px 5px rgba(100, 100, 100, 0.25);
      border-radius: 10px;
      img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 280px;
      }
`
const CardsUserInfo = styled.div`
      /* padding: 30px; */
      padding-top:10px;
      padding-bottom: 20px;
      padding-left: 30px;
      padding-right: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 190px;
  
`
const CardsButtons = styled.div`
      display:flex;
      align-items: center;
      justify-content: space-around;
`
const CardButton = styled.button`
      border: none;
      color: white;
      border-radius: 15px;
      font-size: larger;
      padding: 5px 10px;
      background-color: ${({primary}) => primary ? '#49B240' : '#242424' }
`
const Price = styled.h3`
      color:${({primary}) => primary ? 'red' : '#242424'}
`
export const CardInfo = ({ data, router }) => {

  const { id, image, name, status, species, gender, created, origin } = data
  const [validBuy, setValidBuy] = useState(null);
  const [price, setPrice] = useState(false)

  return (
    <>
      <CardNav />
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
                <li><b>Status:</b>{status}</li>
                <li><b>Species:</b>{species}</li>
                <li><b>Gender:</b>{gender}</li>
                <li><b>Origin:</b>{origin?.name}</li>
                <li><b>Created:</b>{created}</li>
              </ul>
            </div>
            <CardsButtons>
              <CardButton onClick={() => router.back()}>Back</CardButton>
              {!price && 
              <CardButton primary onClick={() => setValidBuy(true)}>Buy</CardButton>
              }
              {price  &&
                <Price primary>Sold out</Price>
              }
              {!price &&
                <Price>Price:${id}</Price>
              }
            </CardsButtons>
          </CardsUserInfo>
        </Card>
      </Container>
      {validBuy && <CardBuy cardId={id} setValidBuy={setValidBuy} setPrice={setPrice} />}
    </>
  )
}
