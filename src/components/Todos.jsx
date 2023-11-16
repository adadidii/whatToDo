import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      {" "}
      {/*Perlu menuliskan kurung kurawal 2x seperti <div style={{CSS code}} sebab code JSX itu sendiri memerlukan {} dan sebuah object {CSS code} ditambahkan di dalamnya. */}
      {todos.map((todo) => {
        return (
          <TodoItem
            Key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
