import { useState } from "react";

function Task5() {
  const [color, setColor] = useState("blue");

  return (
    <button
      onClick={() => setColor(color === "blue" ? "green" : "blue")}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px"
      }}
    >
      Change Color
    </button>
  );
}

export default Task5;
