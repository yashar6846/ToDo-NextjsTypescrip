'use client'

import "./style.css";
import Header from "./header";
import Add from "./add";
import List from "./list";
import DoneList from "./done-list";
import { useState } from "react";
import Todo from "@/app/types/todo";

interface Props{
  todos:Todo[]
}

const TodoList = (props:Props) => {
  const [todos, setTodos]= useState<Todo[]>(props.todos)
  return (
    <div className="container">
      <Header />
      <Add />
      <List todos={todos}/>
      <DoneList todos={todos}/>
    </div>
  );
};

export default TodoList;