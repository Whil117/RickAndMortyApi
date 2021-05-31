import React, { useState } from 'react'
import { CardBackgroudBuy, CardBgButton, CardBuyMsg, CardMsgError } from '../styles/CardBuyStyled'

const CardBuy = ({ cardId, coin, setValidBuy, setPrice, setCoins }) => {

  const [totalCoins, setTotalCoins] = useState(false)

  const handledBuy = () => {
    const isValidCoin = coin >= 0 ? (
      setValidBuy(false),
      setPrice(true),
      setCoins(coin - cardId)
    ) : (
      setTotalCoins(true)
    )
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