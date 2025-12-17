import { useEffect } from "react";

function Task1() {
  useEffect(() => {
    console.log("Rendered!");
  }); // No dependency array → runs on every render

  return (
    <div>
      <h2>Check the console to see "Rendered!" on every render</h2>
    </div>
  );
}

export default Task1;
