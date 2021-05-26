import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const CardDiv = styled.div`
      text-decoration: none;
      color:black;
      margin: 40px 70px;
      width: 323px;
      /* height: 370px; */
      background: #E1E1E1;
      box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      img {
        border-radius: 10px 10px 0 0 ;
        width: 323px;
        height: 300px;
          width:100%;
      }
`
const CardTitle = styled.div`
      margin: 15px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      a{
          color: black;
          text-decoration: none;
      }
      a:hover{
          text-decoration: underline;
      }
`

export const Card = ({ category }) => {

    const { id, name, image } = category

    return (

        <CardDiv key={name}>
            <img src={image} alt={name} />
            <CardTitle>
                <Link href={`/character/${id}`}>
                    <a>{name}</a>
                </Link>
            </CardTitle>
        </CardDiv>
    )
}
