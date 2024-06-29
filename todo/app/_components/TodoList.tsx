"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoData, updateTodoItem, deleteTodoItem } from "../_lib/data";
import { TodoItemType } from "../page";

const TodoList = ({ todos }: any) => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoData,
    retry: true,
  });

  const setDoneHandler = async (item: TodoItemType) => {
    try {
      const updatedItem = await updateTodoItem({
        id: item.id,
        name: item.name,
        is_done: 1,
      });
    } catch (error) {
      console.error("Error updating todo item:", error);
    }
  };

  const setDeleteHandler = async (item: TodoItemType) => {
    try {
      const deletedItem = await deleteTodoItem({ id: item.id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul>
      {data.map((item: TodoItemType) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.is_done ? "DONE" : "NOT DONE"}</p>

          <button onClick={() => setDoneHandler(item)}>MARK AS DONE</button>
          <button onClick={() => setDeleteHandler(item)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
