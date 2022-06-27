import styled from 'styled-components'
import {MdOutlineSearch,MdOutlinePersonOutline,MdOutlineShoppingBag, MdOutlineFavoriteBorder} from 'react-icons/md'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../Context'
import {useContext} from 'react';
import Badge from '@mui/material/Badge';


const Container = styled.div`
    height: ${props => props.height} ;
    /* display: ${props => props.displayed === false? "none" : "block"} ; */
    position:relative ;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.alignItems } ;

`

const Left = styled.div`
  flex: ${props => props.flex ? "1" : "1"} ;
  display: ${props => props.display };
  justify-content: ${props => props.display ? "space-between" : ''} ;
  align-items: center ;
`
const List = styled.div`
  display: flex;
  justify-content:space-between ;
  cursor: pointer;
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
// to style the link(a)
const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    cursor: pointer;
`
// Dropdwon menu

const DropdownContainer = styled.div`
  height: 70vh ;
  display: ${props => props.displayed === false? "none" : "block"} ;
  position: absolute;
  z-index: 100 ;
  background-color:white ;
  width: 100vw;
`
const DropdownMenu = styled.div`
  display: flex ;
  flex-direction:column ;
  font-size: ${props => props.fontSize}  ;
  margin-right: 10% ;
  align-items: flex-start ;
 
`
const DropdownMenuItem = styled.p`
  margin: 2px ;
  cursor: pointer;
  color: ${props => props.color ? props.color : "grey"};
  
  &:hover{
    font-weight:bold ;
    color: black;
  }
`
const DropdownMenuTitle = styled.h3`
  font-weight: 400 ;
`
const DropdownMenuImage = styled.img`
  height: 70%;
  width: 70%;
  margin-left: 20% ;
`

 const DropdownMenuSpan = styled.span`
  font-size: 10px ;
  
 `
const Navbar = () => {
  // react states hooks imported from context managaer 
  // display and handleDropdownMenu to handle the dropdownMenu
  const {displayed, handleDropdownMenu, menuItemName,amountInCart} = useContext(GlobalContext)

  return (
      <Container height="10vh">
        <Wrapper alignItems="center">
          <Left>
            <List>
                <ListItemContainer>
                  <ListItem
                  onMouseEnter={(e) => handleDropdownMenu(e)}>
                  Ladies</ListItem>
                </ListItemContainer>
                <ListItem onMouseEnter={(e) => handleDropdownMenu(e)}>Men</ListItem>
               <ListItem onMouseEnter={(e) => handleDropdownMenu(e)}>Kids</ListItem> 
                <NavLink to="/"><ListItem>Home</ListItem></NavLink>
              </List>
          </Left>
          <Center>
              <NavLink to="/"><Logo>ARWA</Logo></NavLink>
          </Center>
          <Right>
            <List>
              <ListItemContainer>
                  <MdOutlineSearch style={{fontSize: '22px'}}/>
                  <ListItemText>To search</ListItemText>
              </ListItemContainer>
              <NavLink to="/login"><ListItemContainer>
                  <MdOutlinePersonOutline style={{fontSize: '22px'}}/>
                  <ListItemText>Login</ListItemText>
              </ListItemContainer></NavLink>
              <NavLink to="/favorite"><ListItemContainer>
                  <MdOutlineFavoriteBorder style={{fontSize: '22px'}}/>
                <ListItemText>Favorites</ListItemText>
              </ListItemContainer></NavLink>
              <NavLink to="/cart"><ListItemContainer>
                  <Badge badgeContent={amountInCart} color="primary">
                   <MdOutlineShoppingBag style={{fontSize: '22px'}}/>
                </Badge>
                  
                  <ListItemText>Shopping bag</ListItemText>
              </ListItemContainer>
              </NavLink>
            </List>
          </Right>

        </Wrapper>
        {menuItemName === "Kids" ? 
        <DropdownContainer height="50vh" displayed={displayed} onMouseLeave={() => handleDropdownMenu()}>
            <Wrapper alignItems="flex-start" onMouseLeave={() => handleDropdownMenu()}>  
                       <Left flex="2" display="flex">
                        <DropdownMenu>
                            <DropdownMenuItem>
                              Girls
                              <br/>
                              <DropdownMenuSpan>From 5 to 14 years
                              </DropdownMenuSpan>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Boys
                              <br/>
                              <DropdownMenuSpan>From 5 to 14 years
                              </DropdownMenuSpan>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Baby girl
                              <br/>
                              <DropdownMenuSpan>From 9 months to 6 years
                              </DropdownMenuSpan>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Baby boy
                              <br/>
                              <DropdownMenuSpan>From 9 months to 6 years
                              </DropdownMenuSpan>
                            </DropdownMenuItem>
                            {/* <DropdownMenuItem>
                              Newborn babies
                              <br/>
                              <DropdownMenuSpan>From 0 months to 24 months
                              </DropdownMenuSpan> */}
                            {/* </DropdownMenuItem>       */}
                        </DropdownMenu>     
                        <DropdownMenu fontSize="20px">
                            <DropdownMenuTitle>Clothinng</DropdownMenuTitle>
                          <DropdownMenuItem color="red">Sale</DropdownMenuItem>
                          <DropdownMenuItem>New collection</DropdownMenuItem>
                          <DropdownMenuItem>Clothing</DropdownMenuItem>
                          <DropdownMenuItem>accessories</DropdownMenuItem>
                          <DropdownMenuItem>Remarkable</DropdownMenuItem>
                         
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTitle>Accessories</DropdownMenuTitle>
                       <DropdownMenuItem>Shoes</DropdownMenuItem>
                       <DropdownMenuItem>sun glasses</DropdownMenuItem>
                       <DropdownMenuItem>Socks</DropdownMenuItem>
                       <DropdownMenuItem>Bibs</DropdownMenuItem>
                       <DropdownMenuItem>hats</DropdownMenuItem>
                       <DropdownMenuItem>Toys</DropdownMenuItem>
                       <DropdownMenuItem>Swim suits</DropdownMenuItem>
                    </DropdownMenu>
                    </Left> 
                    
                    <Right>
                        <DropdownMenuImage  src="https://st.mngbcn.com/web/oi/sections/home/bannersRebajas/2022/06_junio/003_NL_nino.jpg?ts=3312281451512&imwidth=352&imdensity=2"></DropdownMenuImage>
                    </Right>
            </Wrapper>            
        </DropdownContainer>
    :
     <DropdownContainer  displayed={displayed} onMouseLeave={() => handleDropdownMenu()}>
        <Wrapper alignItems="flex-start" onMouseLeave={() => handleDropdownMenu()}>
                  <Left flex="2" display="flex">
                    <DropdownMenu fontSize="20px">
                       <DropdownMenuItem color="red">Sale</DropdownMenuItem>
                       <DropdownMenuItem>New collection</DropdownMenuItem>
                       <DropdownMenuItem>Clothing</DropdownMenuItem>
                       <DropdownMenuItem>accessories</DropdownMenuItem>
                       <DropdownMenuItem>Plus size</DropdownMenuItem>
                       <DropdownMenuItem></DropdownMenuItem>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTitle>Clothinng</DropdownMenuTitle>
                       <DropdownMenuItem color="red">Sale</DropdownMenuItem>
                       <DropdownMenuItem>New collection</DropdownMenuItem>
                       <DropdownMenuItem>Clothing</DropdownMenuItem>
                       <DropdownMenuItem>accessories</DropdownMenuItem>
                       <DropdownMenuItem>Plus size</DropdownMenuItem>
                       <DropdownMenuItem></DropdownMenuItem>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTitle>Accessories</DropdownMenuTitle>
                       <DropdownMenuItem>Shoes</DropdownMenuItem>
                       <DropdownMenuItem>bags</DropdownMenuItem>
                       <DropdownMenuItem>sun glasses</DropdownMenuItem>
                       <DropdownMenuItem>Belts</DropdownMenuItem>
                       <DropdownMenuItem>scarves</DropdownMenuItem>
                       <DropdownMenuItem>hats</DropdownMenuItem>
                    </DropdownMenu>
                </Left>      
                <Right>
                    {menuItemName === "Ladies" ?  <DropdownMenuImage  src="https://st.mngbcn.com/web/oi/sections/home/bannersRebajas/2022/06_junio/003_NL_woman.jpg?ts=3312281451512&imwidth=352&imdensity=2"></DropdownMenuImage> :   <DropdownMenuImage  src="https://st.mngbcn.com/web/oi/sections/home/bannersRebajas/2022/06_junio/003_NL_man.jpg?ts=3312281451512&imwidth=736&imdensity=2"></DropdownMenuImage>}
                  
                </Right>
        </Wrapper>            
    </DropdownContainer> 
}
    </Container>
    
  )
}

export default Navbar

