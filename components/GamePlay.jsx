import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { useState } from "react"

const GamePlay = () => {

  const [selectedNumber,setselectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber===randomNumber){
      setScore((prev) => prev+randomNumber);
    }
    else{
      setScore((prev) => prev-randomNumber);
    }

  }


  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore/>
        <NumberSelector selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
  padding-top: 70px;
  .top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`
