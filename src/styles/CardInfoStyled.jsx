import styled from '@emotion/styled'

export const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Roboto;
      text-decoration: none;
      color:black;
      height: 100vh;
      width: 100%;
      background-color: #F5F5F5;
`
export const Card = styled.div`
      margin: 10px;
      margin-top: 50px;
      width:300px;
      display: flex;
      flex-direction: column;
      background: #F5F5F5;
      box-shadow: 5px 5px 20px 5px rgba(100, 100, 100, 0.25);
      border-radius: 10px;
      img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 280px;
      }
`
 export const CardsUserInfo = styled.div`
      /* padding: 30px; */
      padding-top:10px;
      padding-bottom: 20px;
      padding-left: 30px;
      padding-right: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 190px;
  
`
export const CardsButtons = styled.div`
      display:flex;
      align-items: center;
      justify-content: space-around;
`
export const CardButton = styled.a`
      border: none;
      color: white;
      border-radius: 15px;
      font-size: larger;
      padding: 5px 10px;
      ::active{
            transform: scale(2,2);
            background-color: ${({primary}) => primary ? '#2D8425' : '#030303' }
      }
      background-color: ${({primary}) => primary ? '#49B240' : '#242424' }
`
export const Price = styled.h3`
      color:${({primary}) => primary ? 'red' : '#242424'}
`
export const List = styled.li`
       list-style: none;
`
export const CardTitle = styled.div`
       display: flex;
       align-items: center;
       justify-content: space-between;
`
