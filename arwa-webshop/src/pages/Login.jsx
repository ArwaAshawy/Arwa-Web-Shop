import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import {Link} from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height:85vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
        width: 40%;
        padding: 20px;
        background-color: white;
`
const Form = styled.form`
        display: flex;
        flex-direction:column ;
        justify-content: center ;
        align-items: center ;

        flex-wrap: wrap;
`
const Title = styled.h1`
        font-size: 24px;
        font-weight: 400;
        text-align:center ;
        margin: 3% ;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-bottom: 1px solid black ;
`;

const Button = styled.button`
  width: 43%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 15px;
`;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
//   color: grey;
// `;

const NavLink = styled(Link)`
    margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: grey;
`

const Login = () => {
    return (
        <>
        
        <Navbar/>
        <Announcement/>
          <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder ="username"/>
                    <Input placeholder ="password"/>
                    <Button>LOGIN</Button>
                    <NavLink to="">DO NOT YOU REMEMBER THE PASSWORD?</NavLink>
                    <NavLink to="/register">CREATE A NEW ACCOUNT</NavLink>
                </Form>
            </Wrapper>
        </Container>
        <Footer/>
        </>
    )
}

export default Login
