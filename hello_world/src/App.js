import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('Edit src/App.js and save to reload.');

  const handleClick = () => {
    setMessage('Hello World!');
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*Place message here  */}
        <p>
          {message} 
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <a>
        <button onClick={handleClick}>Continue to Hello World</button>
        </a>


      </header>

    </div>
  );
}

export default App;
