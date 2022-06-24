import React from 'react'
import styled from 'styled-components'
import {MdOutlineSearch,MdOutlinePersonOutline,MdOutlineShoppingBag, MdOutlineFavoriteBorder} from 'react-icons/md'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center ;
`

const Left = styled.div`
  /*to give left,center and right same size */
  flex: 1 ;
`
const List = styled.div`
  display: flex;
  justify-content:space-around ;
`
const ListItem = styled.p`


  &:hover{
    border-bottom: 1px solid #000;
    padding-bottom: 3px ;
    }
`

const Center = styled.div`
  flex: 1 ;
  text-align: center;

`
const Logo = styled.h1`
  font-weight: bold ;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1 ;
  /* display: flex; */
`
const ListItemContainer = styled.div`
  display: flex;
  flex-direction:column ;
  justify-content: center ;
  align-items:center ;
  cursor: pointer;
`
const ListItemText = styled.p`
  font-size:14px ;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`







const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <List>
              <ListItem>Ladies</ListItem>
              <ListItem>Men</ListItem>
              <ListItem>Kids</ListItem>
              <ListItem>Home</ListItem>
            </List>
        </Left>
        <Center>
          <Logo>ARWA</Logo>
        </Center>
        <Right>
          <List>
            <ListItemContainer>
                <MdOutlineSearch style={{fontSize: '22px'}}/>
                <ListItemText>To search</ListItemText>
            </ListItemContainer>
            <ListItemContainer>
                <MdOutlinePersonOutline style={{fontSize: '22px'}}/>
                <ListItemText>Login</ListItemText>
            </ListItemContainer>
            <ListItemContainer>
                <MdOutlineFavoriteBorder style={{fontSize: '22px'}}/>
                <ListItemText>Favorites</ListItemText>
            </ListItemContainer>
            <ListItemContainer>
                <MdOutlineShoppingBag style={{fontSize: '22px'}}/>
                <ListItemText>Shopping bag</ListItemText>
            </ListItemContainer>
          </List>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar