import { useState, useEffect } from "react";

function Task4() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // Log name whenever it changes
  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  // Update document title with count
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      {/* Name input */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
      </div>

      {/* Counter */}
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Task4;
