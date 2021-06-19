import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Form</h3>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
