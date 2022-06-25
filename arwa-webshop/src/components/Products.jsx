import styled from 'styled-components'
import { ProductItems } from '../data'
import Product from './Product'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:20px ;
`
const Title = styled.h1`
  height: 10vh ;
  text-transform:capitalize ;
  text-align:center ;
  display: flex;
  justify-content:center ;
  align-items:center ;
`
const Products = () => {
    return (
      <>
        <Title>Some of our best products</Title>
        <Container>
            {ProductItems.map(item => (
            <Product item={item} key={item.id}/>
            ))}
        </Container>
      </>
        
    )
}

export default Products