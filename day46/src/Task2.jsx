import { useEffect } from "react";

function Task2() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []); // Empty dependency array → runs only once on mount

  return (
    <div>
      <h2>Check the console to see "Component Loaded"</h2>
    </div>
  );
}

export default Task2;
