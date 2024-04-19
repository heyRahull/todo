import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [deletedList, setDeletedList] = useState([]);

  const addTodo = () => {
    // setTodos([...todos, todo]);
    setTodos(
      () => [...todos, todo]
      // const updatedList = [...todos, todo];
      // console.log(updatedList);
      // return updatedList;
    );

    setTodo("");
  };

  const removeTodo = (index) => {
    const deleteList = todos.filter((elem, i) => {
      return i == index;
    });

    setDeletedList(() => [...deletedList, deleteList]);

    const updatedList = todos.filter((elem, i) => {
      return i != index;
    });
    setTodos(updatedList);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Todo List</h1>
      <div className="mx-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="bg-slate-300 p-2 w-1/4"
        />
        <button className="bg-violet-400 m-2 p-2 text-white" onClick={addTodo}>
          Submit
        </button>
      </div>
      <div className="bg-violet-300 w-1/2 my-4 h-96 ml-[25%] pb-4 overflow-y-scroll">
        <h1 className="text-3xl font-bold py-4">Your Tasks</h1>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div
                key={index}
                className="flex mx-8 bg-white ml-8 py-2 my-2 items-center "
              >
                <li className="w-[90%]">{todo}</li>
                <button
                  onClick={() => removeTodo(index)}
                  className="w-[10%] bg-violet-500 my-2 font-bold mx-4 px-2 py-2 text-white"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="bg-violet-300 w-1/2 my-4 h-96 ml-[25%] pb-4 overflow-y-scroll">
        <h1 className="text-3xl font-bold py-4">Completed Tasks</h1>
        <ul>
          {deletedList.map((todo, index) => {
            return (
              <div
                key={index}
                className="flex mx-8 bg-white ml-8 py-6 my-2 items-center "
              >
                <li className="w-[90%] line-through">{todo}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
