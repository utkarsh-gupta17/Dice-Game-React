import { useState } from "react"
import StartGame from "./components/StartGame"

function App() {

  const [isGameStarted,setisGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setisGameStarted((prev)=>!prev);
  }

  return (
    <>
    <StartGame onClick="toggleGamePlay"/>
    </>
  )
}

export default App
