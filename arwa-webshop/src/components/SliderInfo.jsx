import { SliderItems } from "../data"
import styled from 'styled-components'

const InfoContainer = styled.div`
    display: flex;
    flex-direction:column ;
    justify-content: center ;
    align-items:center ;
    position:absolute ;
    top:0 ;
    bottom:0 ;
    left:0;
    right:0;
    color: white;
`
const Title = styled.h1`
    font-size: 120px;
`
const Description = styled.p`
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: transparent;
    color: white;
    border-color: white ;
`

const SliderInfo = ({info}) => {
  return (
    <InfoContainer>
          <Title>SALE</Title>
          <Description>Up to 50% off</Description>
          <Button>Shop now</Button>
    </InfoContainer>
  )
}

export default SliderInfo