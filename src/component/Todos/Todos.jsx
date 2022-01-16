import React from "react";
import { connect } from "react-redux";
import { removeAllTodo, removeTodo } from "../../action/index";
import Todo from "../Todo/Todo";
import "./Todos.css";

const Todos = ({ todos, removeTodo, removeAllTodo }) => {
  return (
    <div className="todos">
      {todos.length !== 0 && <h2>Lista de tareas</h2>}
      {todos.map((todo, i) => (
        <Todo
          description={todo.description}
          key={todo.id}
          id={todo.id}
          remove={() => removeTodo(i)}
        />
      ))}

      {todos.length !== 0 && (
        <button className={"btn-remove"} onClick={removeAllTodo}>
          Borrar todo
        </button>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeTodo: (id) => dispatch(removeTodo(id)),
    removeAllTodo: () => dispatch(removeAllTodo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
