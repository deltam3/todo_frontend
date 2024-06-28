import AddTodo from "./_components/AddTodo";
import TodoList from "./_components/TodoList";

export default function Home() {
  return (
    <main className="">
      <header>
        <h1>Todo App</h1>
      </header>
      <section className="py-[4.8rem]">
        <div className="max-w-[130rem] mx-auto px-[3.2rem] flex flex-col items-center">
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </div>
      </section>
    </main>
  );
}
