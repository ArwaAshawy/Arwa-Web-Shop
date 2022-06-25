import styled from 'styled-components'
import {MdArrowLeft, MdArrowRight} from 'react-icons/md'
import SliderInfo from './SliderInfo'
import SliderImages from './SliderImages'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../Context'
import {useContext} from 'react';
import { SliderItems } from '../data'


const  Container =  styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    font-size: 25px;
    display:flex;
    align-items: center;
    justify-content: center;
    /* to position the arrows in the middle */
    position: absolute;
    top:0;
    bottom:0;
    /* to seperate the arrows from each other */
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    /* to prevent making the screen more than 100vw*/
    overflow: hidden ;
`
const Wrapper = styled.div`
    height: 100%;
    /*to make the slides horizontally  */
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    display:flex;
    align-items: center;
    justify-content:center ;
    width: 100vw;
    height: 100vh;
    background-color : ${props => props.bg};
`

const Slider = () => {
  const {handleSliderClick, slideIndex} = useContext(GlobalContext)
  return (
    <>
    <Container>
      <Arrow direction="left"  onClick={() => handleSliderClick("left")}>
          <MdArrowLeft/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          
              {SliderItems.map(item => (<Slide><SliderImages imgs={item.imgs} key={item.id}/> </Slide>))}
         
      </Wrapper>
      {/* to handle the sliding property when the arrow are clicked */}
      <Arrow direction="right" onClick={() => handleSliderClick("right")}>
          <MdArrowRight/>
      </Arrow>
    </Container>
    {SliderItems.map(item => <SliderInfo item={item} key={item.id}/>)}
          
      </>  )
}

export default Slider