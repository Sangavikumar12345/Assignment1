import { useState } from "react";

function Task3() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Check me
      </label>
      <p>{isChecked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}

export default Task3;
