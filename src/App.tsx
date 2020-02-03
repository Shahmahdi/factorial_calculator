import React, { useState } from 'react';

const App = () => {

  const [enteredNumber, setEnteredNumber] = useState(undefined as any);
  const [error, setError] = useState('');
  const [result, setResult] = useState(0);

  const onSubmit = () => {
    let result = 1;
    for (let i = 2; i <= enteredNumber; i++) {
      result = result * i;
    }
    setResult(result);
  }

  return (
    <div className="flex flex-column items-center pt0 pt6-ns vh-100">
      <h1>Factorial Calculator</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {error !== '' ? <p className="f6 red">{error}</p> : undefined}
        <input 
          type="number" 
          placeholder="Enter a number..." 
          onChange={e => {
            if (parseInt(e.target.value) < 0) {
              setError('Number must be > or = to 0');
            } else {
              setError('');
              setEnteredNumber(e.target.value)
            }
          }}
        />
        <br />
        <button className="mt1">Calculate Factorial</button>
      </form>
      <h2>Factorial: {result}</h2>
    </div>
  );
}

export default App;
