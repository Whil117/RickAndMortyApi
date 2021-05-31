import React, { useState } from 'react'
import { CardNav } from './CardNav'
import CardBuy from './CardBuy'
import { Container, Card, CardsUserInfo, CardsButtons, CardButton, Price, List,CardTitle } from '../styles/CardInfoStyled'

export const CardInfo = ({ data, router, coin = 100 }) => {

  const { id, image, name, status, species, gender, created, origin } = data
  const [validBuy, setValidBuy] = useState(null);
  const [price, setPrice] = useState(false)
  const [coins, setCoins] = useState(coin);
  console.log(coins)
  return (
    <>
      <CardNav userCoin={coins} />
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
              <CardTitle>
                <h2>{name}</h2>
                <a href={image} download={name} target="_blank">
                  <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6964 10.2353H17.8571V1.70588C17.8571 0.767647 17.0536 0 16.0714 0H8.92857C7.94643 0 7.14286 0.767647 7.14286 1.70588V10.2353H4.30357C2.71429 10.2353 1.91071 12.0776 3.03571 13.1524L11.2321 20.9824C11.9286 21.6476 13.0536 21.6476 13.75 20.9824L21.9464 13.1524C23.0714 12.0776 22.2857 10.2353 20.6964 10.2353ZM0 27.2941C0 28.2324 0.803571 29 1.78571 29H23.2143C24.1964 29 25 28.2324 25 27.2941C25 26.3559 24.1964 25.5882 23.2143 25.5882H1.78571C0.803571 25.5882 0 26.3559 0 27.2941Z" fill="#49B240" />
                  </svg>
                </a>
              </CardTitle>
              <ul>
                <List><b>Status: </b>{status}</List>
                <List><b>Species: </b>{species}</List>
                <List><b>Gender: </b>{gender}</List>
                <List><b>Origin: </b>{origin?.name}</List>
                <List><b>Created: </b>{created}</List>
              </ul>
            </div>
            <CardsButtons>
              <CardButton onClick={() => router.back()}>Back</CardButton>
              {!price &&
                <CardButton primary onClick={() => setValidBuy(true)}>Buy</CardButton>
              }
              {price &&
                <Price primary>Sold out</Price>
              }
              {!price &&
                <Price>Price:${id}</Price>
              }
            </CardsButtons>
          </CardsUserInfo>
        </Card>
      </Container>
      {validBuy && <CardBuy
        coin={coin}
        setCoins={setCoins}
        cardId={id} setValidBuy={setValidBuy}
        setPrice={setPrice} />}
    </>
  )
}
