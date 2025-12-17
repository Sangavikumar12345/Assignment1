function Task5() {
  const items = []; // Empty array

  return (
    <div>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No Data Available</p>
      )}
    </div>
  );
}

export default Task5;
