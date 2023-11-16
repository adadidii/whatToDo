import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  // Definisikan state "title"
  const [title, setTitle] = useState("");
  // Definisikan function handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title); // Meneruskan "title" sebagai argument
    setTitle(""); // Mereset Title
  };

  // Definisikan function "handleChangeTitle"
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  // Periksa apakah function "handleChangeTitle" berfungsi
  console.log(title);

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={handleChangeTitle}
          value={title}
        />
        <button type="submit" style={styles.button}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "32px",
  },
  formInput: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "0 16px",
  },
  button: {
    height: "72px",
    fontSize: "16px",
  },
};

export default TodoForm;
