export async function fetchTodoData() {
  console.log("log");
  try {
    const response = await fetch("http://localhost:3001/");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
