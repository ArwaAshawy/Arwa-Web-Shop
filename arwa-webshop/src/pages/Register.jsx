import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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
const Text = styled.p`
       font-size: 12px;
        margin: 20px 0px;
        width: 45% ;
        text-align:center ;
`
const Input =  styled.input`   
        /* flex: 1; */
        min-width: 40%;
        margin: 20px 10px 0 0;
        padding: 10px;
        border: none;
        border-bottom: black 1px solid;
`

const Agreement = styled.span`
        font-size: 12px;
        margin: 20px 0px;
        width: 45% ;
`

const Button = styled.button`
        width: 45%;
        border: none;
        padding: 15px 20px;
        background-color: black;
        color: white;
        cursor: pointer;
`

const Register = () => {
    return (
      <>
        <Navbar/>
        <Announcement/>
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
               
                <Form>
                <Text>Enjoy discounts and unique experiences in stores and online shopping</Text>
                    <Input placeholder ="First name"/>
                    <Input placeholder ="Last name"/>
                    <Input placeholder ="Email"/>
                    <Input placeholder ="Mobile number"/>
                    <Input placeholder ="Username"/>
                    <Input placeholder ="Password"/>
                    <Input placeholder ="Confirm password"/>
                    <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
        <Footer/>
      </>
        
    )
}

export default Register
