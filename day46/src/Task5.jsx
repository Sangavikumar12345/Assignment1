import { useState, useEffect } from "react";

function Task5() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count; // Update document title
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Task5;

