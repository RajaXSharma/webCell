import { useEffect, useState } from "react";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [tasks, setTasks] = useState([]);
  // console.log(currentInput)
  console.log(tasks);

  useEffect(() => {
    const localStorageTask = JSON.parse(localStorage.getItem("task"));
    if (localStorageTask.length > 0) {
      setTasks(localStorageTask);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const buttonClick = () => {
    if (currentInput !== "") {
      setTasks((task) => [...task, currentInput]);
    }
  };

  const removeTask = (index) => {
    let copyTasks = [...tasks];
    copyTasks.splice(index, 1);
    setTasks(copyTasks);
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>Todo List</h2>
          <input
            type="text"
            className="inputField"
            onChange={(e) => setCurrentInput(e.target.value)}
          />
          <button className="add" onClick={() => buttonClick()}>
            Add
          </button>
        </div>
        <ul id="listContainer">
          {tasks.map((item, index) => (
            <li key={index}>
              {item}-<button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
