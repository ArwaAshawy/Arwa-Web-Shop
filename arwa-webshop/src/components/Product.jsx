import { GlobalContext } from '../Context'
import {useContext} from 'react';
import styled from 'styled-components'
import {MdOutlineSearch,MdOutlineShoppingBag, MdOutlineFavoriteBorder} from 'react-icons/md'



const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgba(0,0,0,0.2);
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #fff7f7; */
    position: relative;
   
    &:hover ${Info}{
        opacity: 1;
    }
`

const Image = styled.img`
    height:100% ;
    width:100% ;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    transition: all 0.5s ease;
    background-color:white ;
    border-radius:50% ;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
    const {handleAmount} = useContext(GlobalContext)
    return (
        <Container>
            {/* <Circle /> */}
            <Image src={item.img[0]}/>
            <Info>
                <Icon>
                    <MdOutlineFavoriteBorder/>
                </Icon>
                <Icon>
                    <MdOutlineSearch/>
                </Icon>
                <Icon>
                    <MdOutlineShoppingBag onClick={(e = 1) => {
                        handleAmount(1)
                        }}/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
