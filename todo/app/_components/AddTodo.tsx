"use client";
import { createTodoItem } from "../_lib/data";
import { useState } from "react";

const AddTodo = () => {
  const [name, setName] = useState<string>("PLACEHOLDER");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const todoItem = await createTodoItem({ name: name });
      setName("");
    } catch (error) {
      console.error("error");
    }
  };

  const onChangeHandler = (e: any) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>ADD TODO</label>
      <input value={name} onChange={onChangeHandler} />
      <button type="submit" onClick={submitHandler}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
