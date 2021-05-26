import React from 'react'
import styled from '@emotion/styled'

const CardNumber = styled.div`
font-family: Roboto;
      display: flex;
      justify-content: center;
      height: 100px;
      align-items: center;
`
const CardNumberButton = styled.button`
      border: none;
      padding: 10px 5px;
      border-radius: 50%;
      color: white;
      background-color: black;
      margin: 10px ;
`
const CardNumberIndex = styled.p`
      font-size: larger;
`

export const CardPages = ({ value, setValue }) => {
    const handleAdd = () => {
        setTimeout(() => {
            setValue(value + 1)
        }, 100);
    }
    const handleSubstract = () => {
        const Substract = value > 1 ? 
        setTimeout(() => {
            setValue(value - 1)
        }, 100) :
         setValue(value = 1)
        return Substract
    }
    return (
        <CardNumber>
            <CardNumberButton onClick={handleSubstract}>Back</CardNumberButton>
            <CardNumberIndex>Page:{value}</CardNumberIndex>
            <CardNumberButton onClick={handleAdd}>Next</CardNumberButton>
        </CardNumber>
    )
}
