import React from 'react'
import styled from '@emotion/styled'

const CardNavContainer = styled.div`
      display:flex;
      justify-content: flex-end;
      margin-top: 100px;
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
        margin-right: 40px;
`

export const GetCard = ({ useCategory }) => {
    const [character, setCharacter] = useCategory

    const handleChange = (event) => {
        const name = event.target.value
        function capitalizaPrimeraLetra(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
        setCharacter(capitalizaPrimeraLetra(name))
    }
    return (
        <CardNavContainer>
            <CardNavInput
                value={character}
                onChange={handleChange}
                type="text"
                placeholder="Search..."
            />
        </CardNavContainer>
    )
}
