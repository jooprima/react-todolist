import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React 2 Belajar React"
    },
    {
      text: "Belajar React 3 Belajar"
    },
    {
      text: "Belajar React 4 Belajar"
    },
    {
      text: "Belajar React 5 Belajar"
    },
    {
      text: "Belajar React 6"
    },
    {
      text: "Belajar React 7"
    },
    {
      text: "Belajar React 8"
    },
    {
      text: "Belajar React 9"
    },
    {
      text: "Belajar React 10"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
