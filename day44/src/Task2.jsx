function Task2() {
  const isPremiumUser = true; // change to false to hide button

  return (
    <div>
      {isPremiumUser && <button>Premium Button</button>}
    </div>
  );
}

export default Task2;
