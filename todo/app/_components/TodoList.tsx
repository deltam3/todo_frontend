"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoData } from "../_lib/data";
import { TodoItemType } from "../page";

const TodoList = ({ todos }: any) => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoData,
    retry: true,
  });

  return (
    <ul>
      {data.map((item: TodoItemType) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;
