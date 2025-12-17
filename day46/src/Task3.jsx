import { useState, useEffect } from "react";

function Task3() {
  const [count, setCount] = useState(0);

  // Log count whenever it changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // Dependency array → runs only when count changes

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </div>
  );
}

export default Task3;
