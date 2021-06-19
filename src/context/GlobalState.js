import {
  useState,
  useEffect,
  useReducer,
  useContext,
  createContext,
} from "react";

import AppReducer from "./AppReducer";

const getLocalStorage = () => {
  const items = localStorage.getItem("items");
  if (items) return JSON.parse(items);
  return [];
};

const initialStates = {
  items: getLocalStorage(),
  alert: {
    show: false,
    type: "",
    msg: "",
  },
};

const AppContext = createContext(initialStates);

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [state, dispatch] = useReducer(AppReducer, initialStates);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const clearList = () => {
    dispatch({
      type: "CLEAR_LIST",
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  };

  const editItem = (id) => {
    const specificItem = state.items.find((item) => item.id === id);
    setEditID(id);
    setIsEditing(true);
    setTitle(specificItem.title);
  };

  const updateItem = (id, title) => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        id,
        title,
      },
    });
  };

  const validateForm = () => {
    dispatch({
      type: "NO_VALUE",
    });
  };

  const removeAlert = () => {
    dispatch({
      type: "REMOVE_ALERT",
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        title,
        editID,
        addItem,
        setTitle,
        editItem,
        setEditID,
        isEditing,
        clearList,
        updateItem,
        removeAlert,
        validateForm,
        setIsEditing,
        handleDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
