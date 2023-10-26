import { useState } from "react";
import styled from "styled-components"

const NumberSelector = ({setError,error,selectedNumber,setselectedNumber}) => {

  const array = [1,2,3,4,5,6];

  const numberSelectorHandler = (value) =>{
    setselectedNumber(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
      {
        array.map((value,i) => (
          <Box key={i}
           isSelected={value===selectedNumber}
           onClick={()=>numberSelectorHandler(value)}
          >{value}</Box>
        ))
      }
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: .3125rem;
  align-items: end;

  .flex{
    display: flex;
    gap: 1.5rem;
  }
  p{
    font-size: 1.5rem;
    font-weight: 700;
  }
  .error{
    color: red;
  }

`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: ${(props) => props.isSelected ? "black" : "white"};
  color: ${(props) => props.isSelected ? "white" : "black"};
`
