export async function fetchTodoData() {
  try {
    const response = (await fetch("http://localhost:3001/")).json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function createTodoItem(data: { name: string }) {
  try {
    const response = await fetch("http://localhost:3001/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const final = await response.json();
    return final;
  } catch (err) {
    console.error(err);
  }
}
