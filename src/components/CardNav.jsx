import React from 'react'
import styled from '@emotion/styled'

const CardNavs = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    font-family: Roboto;
    height: auto;
    background: #E9E9E9;
    box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content:flex-start;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const CardNavTitle = styled.h1`
      font-family: Rock Salt;
      margin-left: 30px;
`

export const CardNav = ({ name, newCoins }) => {
    return (
        <CardNavs>
            <CardNavTitle>Rick and Morty</CardNavTitle>
            <div>
                <h2>{name}</h2>
                <p>Stackly Coins:{newCoins}</p>
            </div>
        </CardNavs>
    )
}
