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

export async function updateTodoItem(data: {
  id: number;
  name: string;
  is_done: number;
}) {
  try {
    const response = await fetch("http://localhost:3001/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error("Error updating todo item:", err);
    throw err;
  }
}

export async function deleteTodoItem(data: { id: number }) {
  try {
    const response = await fetch("http://localhost:3001/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo item");
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error deleting todo item:", error);
    throw error;
  }
}
