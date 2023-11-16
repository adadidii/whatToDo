import React, { useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  // Peroleh "toggleCompleted" dan "deleteTodo" dari TodoContext
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  // Definisikan function getTodoTitleStyle di sini, digunakan untuk dekorasi mencoret
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div style={styles.todoItem}>
      {/* Menambahkan checkbox dan nyalakan eventHandlernya*/}
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
      />
      {/* Panggil function getTodoTitleStyle */}
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      {/* Tambahkan onClick event pada button untuk menghapus */}
      <button style={styles.button} onClick={handleDelete}>
        x
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  checkbox: {
    marginRight: "10px",
    height: "18px",
    width: "18px",
  },

  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginLeft: "20px",
  },
};

export default TodoItem;
