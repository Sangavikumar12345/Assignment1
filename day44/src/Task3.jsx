function Task3() {
  const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

  return (
    <div>
      <h2>City List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task3;
