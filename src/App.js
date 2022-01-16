import React from "react";
import "./App.css";

import Form from "./component/Form/Form";
import Todos from "./component/Todos/Todos";
import Nav from "./component/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Form />
      <Todos />
    </div>
  );
}

export default App;
