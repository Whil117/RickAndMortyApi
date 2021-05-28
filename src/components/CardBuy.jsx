import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../hooks/userContext'
import styled from '@emotion/styled'


const CardBackgroudBuy = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      display: flex;
      background-color:rgba(0,0,0,0.5);
      height: 100vh;
      width: 100%;
      top: 0;
      position: absolute;
`
const CardBgButton = styled.button`
      font-size: large;
      border: none;
      padding: 10px;
      border-radius: 18px;
      color: white;
      background-color: ${({ primary }) => primary ? '#49B240' : '#C12121'}
`
const CardBuyMsg = styled.div`
      margin-left: 20px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 577px;
      height: 332px;
      background: #FFFFFF;
      border-radius: 10px;
      h2{
        font-family: Rock Salt;
      }
      font-family: Roboto;
      p{
        font-size: larger;
      }
      div{
        display: flex;
        justify-content: space-around;
        width: 40%;
      }
`
const CardMsgError = styled.h4`
      color: red;
      font-size: larger;
`
const CardBuy = ({ cardId, setValidBuy,setPrice }) => {

  const user  = useContext(UserContext)
  const [totalCoins, setTotalCoins] = useState(false)

  const handledBuy = () => {
    user.coins = user.coins - cardId
    const isValidCoin =  user.coins >= 0 ? (setValidBuy(false),setPrice(true)) : (setTotalCoins(true), user.coins = 0) 
    return isValidCoin
  }
  return (
    <CardBackgroudBuy>
      <CardBuyMsg>
        <h2>Rick and Morty</h2>
        <p>¿Do your want buy this card?</p>
        {totalCoins &&
          <CardMsgError>No tienes suficientes coins</CardMsgError>
        }
        <div>
          <CardBgButton onClick={() => setValidBuy(false)} >No</CardBgButton>
          <CardBgButton onClick={handledBuy} primary>Yes</CardBgButton>
        </div>
      </CardBuyMsg>
    </CardBackgroudBuy>
  )
}

export default CardBuy