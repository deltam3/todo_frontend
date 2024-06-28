import AddTodo from "./_components/AddTodo";
import TodoList from "./_components/TodoList";
import { fetchTodoData } from "./_lib/data";

export default async function Home() {
  const todoItems = await fetchTodoData();

  return (
    <main className="">
      <header>
        <h1>Todo App</h1>
      </header>
      <section className="py-[4.8rem]">
        <div className="max-w-[130rem] mx-auto px-[3.2rem] flex flex-col items-center">
          <AddTodo></AddTodo>
          <TodoList todos={todoItems}></TodoList>
        </div>
      </section>
    </main>
  );
}
