import styled from 'styled-components';
import {Button} from '/styled/Button.js';

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
