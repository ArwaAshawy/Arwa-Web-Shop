import styled from 'styled-components'
import {MdSend} from 'react-icons/md'

const  Container =  styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

`

const InputContainer = styled.div`  
    width: 50%;
    height: 40px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border: 1px solid lightgrey;

`

const Input = styled.input`
    border:none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex:1;
    border:none;
    background-color: black;
    color: white;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updated from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <MdSend />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter