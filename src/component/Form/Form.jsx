import React, { useState } from "react";
import { addTodo, createTodo } from "../../action/index";
import { connect } from "react-redux";

import "./Form.css";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("Debe ingresar una descripción");
    }
    addTodo(createTodo(input));
    setInput("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="text"
          name="description"
          value={input}
          placeholder="Descripción"
          onChange={handleChange}
        />
        <button className="btn-form">AGREGAR</button>
      </form>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    createTodo: (description) => dispatch(createTodo(description)),
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
}

export default connect(null, mapDispatchToProps)(Form);
