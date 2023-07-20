import Todo from "@/app/types/todo";
import RowItem from "./row-item";


interface Props {
  todos: Todo[];
}

const DoneList = (props: Props) => {
  if (props.todos.length === 0) {
    return null;
  }
  const rowItems = props.todos.map((todo) => (
    <RowItem key={todo.key} title={todo.message} done />
  ));

  return (
    <>
      <h3>Completed</h3>
      <ul>{rowItems}</ul>
    </>
  );
};

export default DoneList;