import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./Actiontype";

let initialState = {
  todos: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({id}) => id != payload),
      };
      case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((ele) =>
          ele.id == payload ? { ...ele, isCompleted: !ele.isCompleted } : ele
        ),
      };
    default:
      return state;
  }
};
