import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { GlobalContext } from '../Context'
import {useContext} from 'react';

const Container = styled.div`
    height: 40vh ;
    /* height: ${props => props.height} ; */
    /* display: ${props => props.displayed === false? "none" : "block"} ; */
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center ;

`

const Left = styled.div`
  /* /* flex: ${props => props.flex ? props.flex : "1"} ; */
  flex: 2;
  /* display: ${props => props.display };
   */
  display: flex;
  justify-content: ${props => props.display ? "space-around" : ''} ;
`
// to style the link(a)
const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`
// Dropdwon menu
const DropdownMenu = styled.div`
  display: flex ;
  flex-direction:column ;
  font-size: ${props => props.fontSize}  ;
  /* margin-right: 10% ; */
 
`
const DropdownMenuItem = styled.p`
  margin: 4px ;
  cursor: pointer;
  &:hover{
    font-weight: bold
  }
`
const DropdownMenuTitle = styled.h3`
  font-weight: 400 ;
`

const Right = styled.div`
  flex: 1 ;
  /* display: flex; */
`
const DropdownMenuImage = styled.img`
  height: 80% ;
  width: 80% ;
  cursor: pointer;
`
const DropDownMenu = ({displayed}) => {
  return (
    <Container height="40vh" displayed={displayed} color="blue">
        <Wrapper>
                <Left flex="2" display="flex" >
                    <DropdownMenu fontSize="20px">
                       <DropdownMenuItem>Sale</DropdownMenuItem>
                       <DropdownMenuItem>New collection</DropdownMenuItem>
                       <DropdownMenuItem>Clothing</DropdownMenuItem>
                       <DropdownMenuItem>accessories</DropdownMenuItem>
                       <DropdownMenuItem>Plus size</DropdownMenuItem>
                       <DropdownMenuItem></DropdownMenuItem>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTitle>Clothinng</DropdownMenuTitle>
                       <DropdownMenuItem>Sale</DropdownMenuItem>
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
                    <NavLink to="/sale">
                       <DropdownMenuImage src="https://st.mngbcn.com/web/oi/sections/home/bannersRebajas/2022/06_junio/003_NL_woman.jpg?ts=3312281451512&imwidth=352&imdensity=2"></DropdownMenuImage>
                      </NavLink>
                </Right>
        </Wrapper>            
    </Container> 
  )
}

export default DropDownMenu