const AppReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [action.payload, ...state.items];

    return {
      ...state,
      items: newItems,
      alert: {
        show: true,
        type: "success",
        msg: `${action.payload.title} successfully added.`,
      },
    };
  }

  if (action.type === "CLEAR_LIST") {
    return {
      ...state,
      items: [],
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      alert: {
        show: true,
        type: "danger",
        msg: "Please supply a title.",
      },
    };
  }

  if (action.type === "REMOVE_ALERT") {
    return {
      ...state,
      alert: {
        alert: {
          show: false,
        },
      },
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const newItem = state.items.map((item) =>
      item.id === action.payload.id
        ? { ...item, title: action.payload.title }
        : item
    );

    return {
      ...state,
      items: newItem,
      alert: {
        show: true,
        type: "success",
        msg: "Item updated successfully.",
      },
    };
  }

  if (action.type === "DELETE_ITEM") {
    const updItems = state.items.filter((item) => item.id !== action.payload);

    return {
      ...state,
      items: updItems,
      alert: {
        show: true,
        type: "danger",
        msg: "Item deleted successfully.",
      },
    };
  }

  throw new Error("No matching action type");
};

export default AppReducer;
