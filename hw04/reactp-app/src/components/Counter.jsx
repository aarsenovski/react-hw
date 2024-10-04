import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 0) {
      document.body.style.backgroundColor = "green";
    } else if (counter < 0) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [counter]);

  const incrementCounter = () => setCounter(counter + 1);

  const decrementCounter = () => {
    if (counter > -10) {
      setCounter(counter - 1);
    }
  };

  const reset = () => setCounter(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
