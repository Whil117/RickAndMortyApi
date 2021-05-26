import React, { useState } from 'react'
import styled from '@emotion/styled'

const CardNavs = styled.div`
    width: 100%;
    height: 139px;
    background: #E9E9E9;
    box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`
const CardNavTitle = styled.h1`
      font-family: Rock Salt;
`
const CardNavInput = styled.input`
      width: 273px;
      padding: 10px;
       border: none;
      background: #FFFFFF;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
`

export const CardNav = ({ useCategory }) => {
    const [character,setCharacter] = useCategory

    const handleChange = (event) => {
        setCharacter(event.target.value)
    }
    return (
        <CardNavs>
            <CardNavTitle>Rick and Morty</CardNavTitle>
            <CardNavInput
                value={character}
                onChange={handleChange}
                type="text"
                placeholder="Search..."
            />
        </CardNavs>
    )
}
