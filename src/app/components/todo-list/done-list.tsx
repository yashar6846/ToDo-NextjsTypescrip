import Todo from "@/app/types/todo";
import { getTodo } from "../../servics/todo";
import RowItem from "./row-item";

interface Props{
  todos:Todo[]
}

const DoneList =  (props:Props) => {
  const rowItems = props.todos
  // const rowItems = Object.keys(todoList)
    .filter((todo) => todo.doneAt)
    .map((todo) => <RowItem key={todo.key} title={todo.message}done />);
    
  return (
    <>
      <h3>Completed</h3>
      <ul>{rowItems}</ul>
    </>
  );
};

export default DoneList;