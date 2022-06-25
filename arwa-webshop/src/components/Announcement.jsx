import styled from 'styled-components'

const Container = styled.div`
    height: 30px ;
    background-color: black ;
    color: white ;
    display: flex;
    justify-content:center ;
    align-items:center ;
    font-size: 12px ;
    font-weight: 500 ;
`
const Announcement = () => {
  return (
    <Container>
        Free shipping from €30 and easy returns - Returns extended to 60 days
    </Container>
  )
}

export default Announcement