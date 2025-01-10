import { useState } from "react";

export function CountExample() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        {" "}
        click me{" "}
      </button>
    </div>
  );
}
