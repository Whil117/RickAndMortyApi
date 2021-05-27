import React, { useState,useEffect } from 'react'
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
      border-radius: 20px;
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


const CardBuy = ({ cardId, setValidBuy,coins,setCoins }) => {

  // const [coinsTotal, setCoinsTotal] = useState(false);

  
  useEffect(() => {
    localStorage.removeItem('coins', coins);
  }, [coins]);

  const handledBuy = () => {
        setCoins(coins - cardId)
        setValidBuy(false)
        useEffect(() => {
          localStorage.setItem('coins', coins);
        }, [coins]);
      }

  return (
    <CardBackgroudBuy>
      <CardBuyMsg>
        <h2>Rick and Morty</h2>
        <p>¿Do your want buy this card?</p>
        {/* {coinsTotal &&
          <p>No tienes coins</p>
        } */}
        <div>
          <CardBgButton onClick={() => setValidBuy(false)} >No</CardBgButton>
          <CardBgButton onClick={handledBuy} primary>Yes</CardBgButton>
        </div>
      </CardBuyMsg>
    </CardBackgroudBuy>
  )
}

export default CardBuy