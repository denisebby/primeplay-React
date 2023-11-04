import React, { useState } from 'react';

export default function Home() {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);
  const [count2, setCount2State] = useState(0); 

  // A more complex function to update count2
  const handleIncrementByFive = () => {
    // Some complex logic here...
    let newValue = count2 + 5; // Example operation

    // Finally, set the new value to the state
    setCount2State(newValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',  }}>
      <h1>Counter 1: {count}</h1>
      <button style={{backgroundColor: 'gold' }} onClick={() => setCount(count + 1)}>Increment by 1</button>
      <br></br>
      <h1>Counter 2: {count2}</h1>
      <button style={{backgroundColor: 'gold' }} onClick={handleIncrementByFive}>Increment by 5</button>
    </div>
  );
}