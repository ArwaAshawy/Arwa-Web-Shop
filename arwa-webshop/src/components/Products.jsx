import styled from 'styled-components'
import { ProductItems } from '../data'
import Product from './Product'
import {Link} from 'react-router-dom'

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

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const Products = () => {
    return (
      <>
        <Title>Some of our best products</Title>
        <Container>
            {ProductItems.map(item => (
            <NavLink to={`/product/${item.id}`}>
              <Product item={item} key={item.id}/>
            </NavLink>
            ))}
        </Container>
      </>
        
    )
}

export default Products