import { FaPen, FaTrash } from "react-icons/fa";

import { useGlobalContext } from "../context/GlobalState";

const TodoItem = ({ id, title }) => {
  const { editItem, handleDelete } = useGlobalContext();

  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={() => editItem(id)}>
          <FaPen />
        </span>
        <span className="mx-2 text-danger" onClick={() => handleDelete(id)}>
          <FaTrash />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
