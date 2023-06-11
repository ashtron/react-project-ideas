import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement(event) {
    setCount(count + 1);
  }

  function handleDecrement(event) {    
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
