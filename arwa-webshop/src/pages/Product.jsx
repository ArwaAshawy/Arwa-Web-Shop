import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Link, useParams} from 'react-router-dom'
import  { useState,useEffect, useContext} from 'react'
import { GlobalContext} from '../Context'
import { ProductItems } from '../data';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

`
const ImageContainer = styled.div`
  flex:1 ;
  display: flex;
  flex-wrap:wrap ;
`

const Img = styled.img`
  width: 45%;
  height: 40vh;
  /* flex:1; */
  object-fit:cover ;
  margin:1px ;
`

const InfoContainer = styled.div`
  flex:1 ;
  padding:0px 50px ;
`

const Title = styled.h1`
  font-weight: 200;

`

const Desc = styled.p`
  margin:20px 0px ;
`

const Price = styled.span`
  font-weight: 100;
  font-size:40px ;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display:flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    justify-content: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    
   
`
const FilterColor = styled.div` 
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    border : ${props => props.border && "solid 1px grey"};
`
const FilterSize = styled.select`
    margin-left:  10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
   
`
const AddContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 50%;
   align-items: center;
`
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 5px;
`
const Add = styled.p`
   font-size:20px ;
   cursor: pointer;
   transition: all 0.1s ease-in-out !important;
   
   &:hover{
     font-size:30px ;
   }
`
const Remove = styled.p`
   font-size:24px ;
   cursor: pointer;
   transition: all 0.1s ease-in-out !important;

   &:hover{
     font-size:30px ;
   }
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid black;
    background-color: white;
    cursor: pointer;
    font-weight: 200;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {

  const {amount,handleAmount,handleCart} = useContext(GlobalContext)
  let {id} = useParams()
  // states to keep the data that comes from the array about the product
  const [imgs, setImgs] = useState([])
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [colors, setColors ]= useState([])

  // Use effect to prevent to many renders
  useEffect(() => {
    
  ProductItems.filter(product => {
    if ( product.id === parseInt(id)){
        setImgs(product.img)
        setTitle(product.title)
        setPrice(product.price)
        setColors(product.color)
    }
  } )
  },[imgs,title,price,colors])
  
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
          {imgs.map(img => <Img src={img}/>)}
          
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A at, voluptatibus dignissimos blanditiis veritatis pariatur quibusdam, libero neque repellendus illo atque in quae sed voluptatem culpa voluptates alias eligendi quasi.</Desc>
          <Price>$ {price}</Price>
          <FilterContainer>
              <Filter>
                  <FilterTitle>Color</FilterTitle>
                  {colors.map(color =>  color === "white" ?
                  // to set a border if the color is white
                  <FilterColor color={color} border="black"/> : <FilterColor color={color} /> )}
                  
              </Filter>
              <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                      <FilterSizeOption>XS</FilterSizeOption>
                      <FilterSizeOption>S</FilterSizeOption>
                      <FilterSizeOption>M</FilterSizeOption>
                      <FilterSizeOption>L</FilterSizeOption>
                      <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                  
              </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
                  <Remove onClick={(e) => handleAmount(e)}>-</Remove>
                  <Amount>{amount}</Amount>
                  <Add onClick={(e) => handleAmount(e)}>+</Add>
              </AmountContainer>
              <Button onClick={() => handleCart(amount)} >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* <Newsletter/> */}
      <Footer/>
    </Container>
  )
}

export default Product