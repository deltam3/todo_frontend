"use client";
import React, { useState } from "react";

type Props = {
  todos: any;
};

const TodoList = ({ todos }: Props) => {
  console.log(todos);

  return (
    <div>
      {todos.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <p>Todos</p>
    </div>
  );
};

export default TodoList;
