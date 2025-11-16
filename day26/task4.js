function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve({ id: 1, name: "sangavi kumar" });
      } else {
        reject("Failed to fetch data");
      }
    }, 2000); 
  });
}


async function getData() {
  try {
    const data = await fetchData();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Fetch attempt finished.");
  }
}


getData();
