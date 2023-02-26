import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoTypes {
  id: string;
  name: string;
}

export interface TodoStateTypes {
  todos: TodoTypes[];
  selected: TodoTypes;
}

export const todoInitialState: TodoStateTypes = {
  todos: [],
  selected: {
    id: "",
    name: "",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    ADD_TODO: (state: TodoStateTypes, action: PayloadAction<TodoTypes>) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    UPDATE_TODO: (state: TodoStateTypes, action: PayloadAction<TodoTypes>) => {
      return {
        ...state,
        todos: state.todos.map((item: TodoTypes) => {
          return item.id === action.payload.id ? { ...action.payload } : item;
        }),
      };
    },
    DELETE_TODO: (
      state: TodoStateTypes,
      action: PayloadAction<{ id: string }>
    ) => {
      state.todos = state.todos.filter(
        (todo: TodoTypes) => todo.id !== action.payload.id
      );
      return state;
    },
    VIEW_TODO: (
      state: TodoStateTypes,
      action: PayloadAction<{ id: string }>
    ) => {
      const remainingTodos = state.todos.filter(
        (todo: TodoTypes) => todo.id !== action.payload.id
      );
      const selectedTodo = state.todos.filter((todo: TodoTypes) => {
        return todo.id === action.payload.id;
      });
      return { ...state, todos: remainingTodos, selected: selectedTodo[0] };
    },
  },
});

export const { ADD_TODO, UPDATE_TODO, DELETE_TODO, VIEW_TODO } =
  todoSlice.actions;
export default todoSlice.reducer;
