import { SliderItems } from "../data"
import styled from 'styled-components'

const ImgContainer = styled.div`
    flex:1;
    height: 100%;
    
`
const Image = styled.img`
    height:70%;
    width:100% ;

`
const SliderImages = ({imgs}) => {
  return (
      imgs.map(img => <ImgContainer>
        <Image src={img}/>
    </ImgContainer>)
        
         
  )
}

export default SliderImages