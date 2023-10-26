import styled from "styled-components"

const RoleDice = ({roleDice,currentDice}) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
  margin-top: 2.1875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 1.5rem;
  }
  .dice{
    cursor: pointer;

  }
`
