import { useEffect } from "react";

import { useGlobalContext } from "../context/GlobalState";

const Alert = ({ msg, type }) => {
  const { items, removeAlert } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [items, removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
