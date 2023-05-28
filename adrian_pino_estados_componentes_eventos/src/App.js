import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert/Alert';
import Login from './Components/Login/Login';

function App() {
  
  const[isValid, setIsValid] = useState()

  const handlerSubmitResult = (e) => {
    setIsValid(e)
  };

  
  return (
    <div className="App">
      <h1>Sign in</h1>
      <Login onSubmitForm={(e) => handlerSubmitResult(e)} />
       <Alert  text={isValid ? 'Correct' : 'No correct'} variant={isValid ? 'success' : 'danger'}/>
    </div>
  );
}

export default App;
