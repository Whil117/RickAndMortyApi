import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

const CardDiv = styled.div`
      text-decoration: none;
      color:black;
      margin: 20px 30px;
      width: 323px;
      background: white;
      box-shadow: 5px 5px 20px 5px rgba(100, 100, 100, 0.25);
      border-radius: 10px;

`
const CardTitle = styled.div`
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
`
const CardImage = styled(Image)`
        border-radius: 10px 10px 0 0;
`
const CardAncla = styled.a`
      text-decoration:none;
      :hover{
          background-color: #d7d7da;
      }
`

export const Card = ({ category }) => {

    const { id, name, image } = category
    return (

        <Link href={`/character/${id}`}>
            <CardAncla>
                <CardDiv key={name}>
                    <CardImage
                        src={image}
                        alt={name}
                        width={323}
                        height={300}
                        className={CardImage}
                    />
                    <CardTitle>
                        <p>{name}</p>
                    </CardTitle>
                </CardDiv>
            </CardAncla>
        </Link>
    )
}
