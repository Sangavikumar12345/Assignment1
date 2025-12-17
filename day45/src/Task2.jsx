import { useState } from "react";

function Task2() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "Stranger"}</p>
    </div>
  );
}

export default Task2;
