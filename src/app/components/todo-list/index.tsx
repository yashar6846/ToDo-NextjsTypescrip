'use client'

import "./style.css";
import Header from "./header";
import Add from "./add";
import List from "./list";
import DoneList from "./done-list";
import { useState } from "react";
import Todo from "@/app/types/todo";

interface Props {
  todos: Todo[];
}

const TodoList = (props: Props) => {
  const [todos, setTodos] = useState<Array<Todo>>(props.todos);


  const handleAdd = (todo: Todo) => {
    setTodos((todos) => [...todos, todo]);
  };

 

  return (
    <div className="container">
      <Header />
      <Add onAdd={handleAdd} />
      <List todos={todos.filter((todo) => !todo.doneAt)} />
      <DoneList todos={todos.filter((todo) => todo.doneAt)} />
      
    </div>
  );
};

export default TodoList;