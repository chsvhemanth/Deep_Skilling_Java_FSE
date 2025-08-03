import React, { useState } from 'react';
import CurrencyConvertor from './Components/CurrencyConverter';

function App() {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount(count + 1);
    sayHello();
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello Member1");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h3>{count}</h3>

      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <br />
      <button onClick={handleClick}>Click on me</button>

      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;