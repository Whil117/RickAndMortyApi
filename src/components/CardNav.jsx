import React from 'react'
import styled from '@emotion/styled'

const CardNavs = styled.div`
    top: 0;
    position: sticky;
    width: 100%;
    height: auto;
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
      margin-top:20px;
      margin-bottom: 20px;
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
          const name = event.target.value
          function capitalizaPrimeraLetra(str) {
              return str.charAt(0).toUpperCase() + str.slice(1)
          }
        setCharacter(capitalizaPrimeraLetra(name))
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
