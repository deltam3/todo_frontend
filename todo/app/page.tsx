import AddTodo from "./_components/AddTodo";
import TodoList from "./_components/TodoList";
import { fetchTodoData } from "./_lib/data";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export type TodoItemType = {
  id?: number;
  name: string;
  is_done: boolean;
};

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoData,
  });

  return (
    <main className="">
      <header>
        <h1>Todo App</h1>
      </header>
      <section className="py-[4.8rem]">
        <div className="max-w-[130rem] mx-auto px-[3.2rem] flex flex-col items-center">
          <AddTodo></AddTodo>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <TodoList></TodoList>
          </HydrationBoundary>
        </div>
      </section>
    </main>
  );
}
