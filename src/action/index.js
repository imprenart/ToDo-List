let todoId = 0;

export function createTodo(description) {
  return {
    type: "CREATE-TODO",
    description,
    id: todoId++,
  };
}

export function addTodo(payload) {
  return { type: "ADD_TODO", payload };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
}

export function removeAllTodo() {
  return { type: "REMOVE-ALL-TODO" };
}
