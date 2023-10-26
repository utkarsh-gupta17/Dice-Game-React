import styled from 'styled-components';

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
      <img src="/images/dices_1.png" alt="" />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 73.75rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  .content{
    h1{
      font-size: 6rem;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
font-size: 1rem;
  min-width: 13.75rem;
  border: none;
  padding: .625rem 1.125rem;
  background: #000;
  border-radius: .3125rem;
  color: white;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
