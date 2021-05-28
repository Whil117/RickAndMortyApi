import styled from '@emotion/styled'

export const CardBackgroudBuy = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      display: flex;
      background-color:rgba(0,0,0,0.5);
      height: 100vh;
      width: 100%;
      top: 0;
      position: absolute;
`
export const CardBgButton = styled.button`
      font-size: large;
      border: none;
      padding: 10px;
      border-radius: 18px;
      color: white;
      background-color: ${({ primary }) => primary ? '#49B240' : '#C12121'}
`
export const CardBuyMsg = styled.div`
      padding: 20px;
      margin-left: 20px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 577px;
      height: 332px;
      background: #FFFFFF;
      border-radius: 10px;
      h2{
        font-family: Rock Salt;
      }
      font-family: Roboto;
      p{
        font-size: larger;
      }
      div{
        display: flex;
        justify-content: space-around;
        width: 40%;
      }
`
export const CardMsgError = styled.h4`
      color: red;
      font-size: larger;
`