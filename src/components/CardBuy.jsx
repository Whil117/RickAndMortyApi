import React, { useState, useContext } from 'react'
import { UserContext } from '../hooks/userContext'
import { CardBackgroudBuy, CardBgButton, CardBuyMsg, CardMsgError } from '../styles/CardBuyStyled'

const CardBuy = ({ cardId, setValidBuy, setPrice, setUserCoin }) => {

  const user = useContext(UserContext)
  const [totalCoins, setTotalCoins] = useState(false)
  
  const handledBuy = () => {
    user.coins = user.coins - cardId
    const isValidCoin = user.coins >= 0 ? (
      setValidBuy(false),
      setPrice(true),
      setUserCoin(user.coins)

    ) : (
      setTotalCoins(true),
      user.coins = 0
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