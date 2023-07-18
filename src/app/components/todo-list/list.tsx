import RowItem from "./row-item";
import Todo from "@/app/types/todo";

interface Props{
  todos:Todo[]
}

const List = (props:Props) => {
  const rowItems = props.todos
    .filter((todo) => !todo.doneAt)
    .map((todo) => <RowItem key={todo.key} title={todo.message} />);

  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">{rowItems}</ul>
    </>
  );
};

export default List;