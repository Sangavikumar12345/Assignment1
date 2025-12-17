import { useState } from "react";

function Task5() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword;

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Password Match Validation</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Confirm Password:{" "}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>

      {confirmPassword && (
        <p style={{ color: passwordsMatch ? "green" : "red" }}>
          {passwordsMatch ? "Passwords match" : "Passwords do not match"}
        </p>
      )}
    </div>
  );
}

export default Task5;
