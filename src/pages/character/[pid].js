import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Roboto;
      text-decoration: none;
      color:black;
      height: 100vh;


`
const Card = styled.div`
      display: flex;
      flex-direction: column;
      background: #E1E1E1;
      box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      img {
        border-radius: 10px 10px 0 0;
        width: 323px;
        height: 100%;
      }
`
const CardsUserInfo = styled.div`

      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  
`
const CardButtonBack = styled.button`
      border: none;
      color: white;
      border-radius: 20px;
      background-color: black;
      font-size: larger;
      padding: 5px 10px;
      ::hover{
        background-color: grey;
      }
`

const Post = () => {

  const [data, setData] = useState({});

  const charFetch = (value) => {

    const url = `https://rickandmortyapi.com/api/character/${value}`
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.log)
  }

  const router = useRouter()
  const { pid } = router.query

  useEffect(() => {
    if (pid) {
      charFetch(pid)
    }
  }, [pid])
  return (
    <Container>
      <Card>
        <div>
          <img src={data.image} alt={data.name} />
        </div>
        <CardsUserInfo>
          <div>
            <h2>{data.name}</h2>
            <ul>
              <li>Status:{data.status}</li>
              <li>Species:{data.species}</li>
              <li>Gender:{data.gender}</li>
              <li>Origin:{data.origin?.name}</li>
              <li>Created:{data.created}</li>
            </ul>
          </div>
          <div>
            <CardButtonBack onClick={() => router.back()}>Back</CardButtonBack>
          </div>
        </CardsUserInfo>
      </Card>
    </Container>
  )
}

export default Post