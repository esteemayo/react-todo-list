import { FaBook, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { v4 } from "uuid";

import { useGlobalContext } from "../context/GlobalState";
import Button from "./Button";
import Alert from "./Alert";

const TodoForm = () => {
  const inputRef = useRef(null);
  const {
    alert,
    title,
    editID,
    addItem,
    setTitle,
    isEditing,
    setEditID,
    updateItem,
    setIsEditing,
    validateForm,
  } = useGlobalContext();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      validateForm();
    } else if (title && isEditing) {
      updateItem(editID, title);

      setTitle("");
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = { id: v4(), title };
      addItem(newItem);
      setTitle("");
    }
  };

  return (
    <div className="card card-body my-3">
      {alert.show && <Alert {...alert} />}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <FaBook />
            </div>
          </div>
          <input
            type="text"
            placeholder="Add a todo item"
            className="form-control text-capitalize"
            value={title}
            ref={inputRef}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className={`btn btn-block ${
            isEditing ? "btn-success" : "btn-primary"
          } mt-3 text-capitalize custom-btn`}
          text={isEditing ? "edit item" : " add item"}
          icon={<FaArrowRight />}
        />
      </form>
    </div>
  );
};

export default TodoForm;
