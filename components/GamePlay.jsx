import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { useState } from "react"
import {Button} from '/styled/Button.js'
import { OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {

  const [selectedNumber,setselectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error , setError ] = useState("");
  const [showRules , setShowRules] = useState(false);

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min);
  };

  const resetScore = ()=>{
    setScore(0);
  }

  const roleDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any Number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);


    if(selectedNumber===randomNumber){
      setScore((prev) => prev+randomNumber);
    }
    else{
      setScore((prev) => prev-randomNumber);
    }
    setselectedNumber(undefined);

  }


  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=> setShowRules((prev)=>!prev)}>{
          showRules ? "Hide" : "Show"
          }Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
  padding-top: 2.5rem;
  .top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 1.875rem;
  }
`;
