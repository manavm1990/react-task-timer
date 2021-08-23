import React from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [count, setCount] = React.useState(0);
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        return newCount;
      });
    }, 1000);

    // Cleanup the useEffect
    return () => {
      clearTimeout(timeout);
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements[0];
    setTasks((prevTasks) => [...prevTasks, value]);

    event.target.reset();
  };

  return (
    <>
      <h1>Hello World {count}</h1>

      <form onSubmit={handleSubmit}>
        <Input />
        <button
          type="submit"
          className="rounded-sm p-4 text-white bg-green-500 ml-4"
        >
          ➕ Add Task
        </button>
      </form>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
