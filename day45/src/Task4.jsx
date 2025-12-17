import { useState } from "react";

function Task4() {
  const [country, setCountry] = useState(""); // Controlled state

  return (
    <div style={{ padding: "20px" }}>
      <label>
        Select a country:{" "}
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">--Choose--</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
        </select>
      </label>

      {country && <p>You selected: {country}</p>}
    </div>
  );
}

export default Task4;
