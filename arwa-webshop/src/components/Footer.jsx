import { FaFacebookF,FaFoursquare,FaInstagram,FaPinterestP,FaSpotify,FaSnapchat} from "react-icons/fa";
import {MdOutlineMailOutline,MdOutlineLocalPhone,MdOutlineStoreMallDirectory} from "react-icons/md"
import styled from 'styled-components'




const Container = styled.div`
  display: flex;
  background-color:black ;
  color: white;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ARWA</Logo>
                <Desc>  There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FaFacebookF/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <FaInstagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <FaFoursquare/>
                    </SocialIcon>
                    <SocialIcon  color="E60023">
                        <FaPinterestP/>
                    </SocialIcon>
                    <SocialIcon  color="E60023">
                        <FaSnapchat/>
                    </SocialIcon>
                    <SocialIcon  color="E60023">
                        <FaSpotify/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
              <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                         <MdOutlineStoreMallDirectory style={{marginRight:"10px"}}/> 3997BB Rotterdam
                 </ContactItem>
                 <ContactItem>
                      <MdOutlineLocalPhone style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MdOutlineMailOutline style={{marginRight:"10px"}} /> contact@shop.dev
                </ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
