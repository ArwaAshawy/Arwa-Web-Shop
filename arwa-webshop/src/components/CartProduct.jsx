import styled from 'styled-components'
import  {useContext} from 'react'
import { GlobalContext} from '../Context'

const Info = styled.div`
    flex: 3;
`

const Hr = styled.div`
    background-color: white;
    border: none;
    height: 1px;`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`  
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
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
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

`

const CartProduct = ({product}) => {
    const {handleAmount, amount} = useContext(GlobalContext)
  return (
    <Info>
                        <Product>
                        <ProductDetail>
                            <Image src={product.img[0]} />
                            <Details>
                            <ProductName>
                                <b>Product:</b> {product.title}
                            </ProductName>
                            <ProductId>
                                <b>ID:</b> 93813718293
                            </ProductId>
                            <ProductColor color={product.color[0]} />
                            <ProductSize>
                                <b>Size:</b> M
                            </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add  onClick={(e) => handleAmount(e)}>+</Add>
                                <ProductAmount>{amount}</ProductAmount>
                                <Remove  onClick={(e) => handleAmount(e)}>-</Remove>
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.price}</ProductPrice>
                        </PriceDetail>
                      </Product>
                    <Hr />
    </Info>
  )
}

export default CartProduct