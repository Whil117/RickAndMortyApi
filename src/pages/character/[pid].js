import { useRouter } from 'next/router'
import { CardInfo } from '../../components/CardInfo';
import React, { useEffect, useState } from 'react'
import { UserContext } from '../../hooks/userContext';
import { User } from '../../assets/userData';

const Post = () => {
  const [data, setData] = useState({});

  const router = useRouter()
  const { pid } = router.query

  useEffect(() => {
    const charFetch = async (value) => {
      const url = `https://rickandmortyapi.com/api/character/${value}`
      const res = await fetch(url)
      const data = await res.json()
      setData(data)
    }
    const isPid = pid ? charFetch(pid) : null
    return isPid
  }, [pid])

  return (
    <UserContext.Provider value={User}>

      <CardInfo data={data} router={router} />

    </UserContext.Provider>
  )
}

export default Post