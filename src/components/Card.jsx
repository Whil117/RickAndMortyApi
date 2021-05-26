import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

const CardDiv = styled.div`
      text-decoration: none;
      color:black;
      margin: 20px 30px;
      width: 323px;
      background: #E1E1E1;
      box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.25);
      border-radius: 10px;

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
const CardImage = styled(Image)`
        border-radius: 10px 10px 0 0;
`

export const Card = ({ category }) => {

    const { id, name, image } = category
    return (

        <CardDiv key={name}>
            <CardImage
                src={image}
                alt={name}
                width={323}
                height={300}
                className={CardImage}
            />
            <CardTitle>
                <Link href={`/character/${id}`}>
                    <a>{name}</a>
                </Link>
            </CardTitle>
        </CardDiv>
    )
}
