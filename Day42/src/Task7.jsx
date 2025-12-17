function Task7({ text, color, size }) {
  return (
    <button
      style={{
        backgroundColor: color,
        padding: size === "large" ? "12px 24px" : "8px 16px",
        color: "white",
        border: "none",
        borderRadius: "4px",
      }}
    >
      {text}
    </button>
  );
}

export default Task7;

