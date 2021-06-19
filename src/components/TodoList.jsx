import { FaTimes } from "react-icons/fa";

import { useGlobalContext } from "../context/GlobalState";
import TodoItem from "./TodoItem";
import Button from "./Button";

const TodoList = () => {
  const { items, clearList } = useGlobalContext();

  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {items.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
      <Button
        text="clear list"
        icon={<FaTimes />}
        onClick={clearList}
        className="btn btn-danger btn-block text-capitalize mt-5"
      />
    </ul>
  );
};

export default TodoList;
