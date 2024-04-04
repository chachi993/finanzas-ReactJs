import {useState} from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
    const [ userInput, setUserInput ] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(newValue, inputIdentifier){
        setUserInput(prevUserInput => {//actualizo el state en base al viejo state
            return {
                ...prevUserInput,//copiar todos los viejos valores en el nuevo obj
                [inputIdentifier] : +newValue //dinamic setear la prop y setearla al nuevo valor, el + es para que sea numero
            }
        })
    }
  return (
      <>
        <Header/>
        <UserInput
            userInput={userInput}
            onChange={handleChange}/>
          {!inputIsValid && <p className="center">PLease enter a duration greater than 0</p>}
          {inputIsValid && <Results
              userInput={userInput}/>}
      </>

  )
}

export default App
