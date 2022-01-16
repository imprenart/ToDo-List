const initialState = {
  todos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE-TODO":
      return {
        ...state,
        todo: { ...action.payload },
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => {
          return index !== action.payload;
        }),
      };

    case "REMOVE-ALL-TODO":
      return {
        ...state,
        todos: state.todos.splice(state.todos.length)
      }

    default:
      return state;
  }
}
