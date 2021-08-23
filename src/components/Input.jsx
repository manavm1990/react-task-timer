import React from "react";

// TODO: Accept props to make this more configurable
function Input() {
  return (
    <div>
      <label htmlFor="add-task" className="sr-only">
        Add a Task:
      </label>
      <input type="text" id="add-task"></input>
    </div>
  );
}

export default Input;
