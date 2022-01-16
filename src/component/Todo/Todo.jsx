import React, { useState } from "react";

import "./Todo.css";

const Todo = ({ description, remove }) => {
  const [checked, setChecked] = useState(false);

const handleChange = () => {
    setChecked(!checked);
  }

  return (
    <div className="todo">
      <input type="checkbox" value={checked} onClick={handleChange} />
      <span className={checked ? "complete" : ""}>{description}</span>
      <button className="button" onClick={remove}>
        X
      </button>
    </div>
  );
};

export default Todo;
