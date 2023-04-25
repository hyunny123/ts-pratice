import React, { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "책읽기", completed: false },
    { id: 2, text: "영화보기", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const toggleHandler = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const clickHandler = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="main-container">
      <h1>Todo</h1>
      <p>완료한 todo는 그 위를 클릭시 줄생성</p>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleHandler(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="할일 추가"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={clickHandler}>추가</button>
    </div>
  );
};

export default TodoList;
