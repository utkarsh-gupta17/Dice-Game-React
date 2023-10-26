import styled from "styled-components"

const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore
const ScoreContainer = styled.div`
    text-align: center;
    max-width: 12.5rem;
  h1{
    font-size: 100px;
    line-height: 6.25rem;
  }
  p{
    font-weight: 500;
    font-size: 1.5rem;
  }
`
