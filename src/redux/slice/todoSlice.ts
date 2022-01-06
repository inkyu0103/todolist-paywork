import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../Interface/todo";

interface TodoSliceInitialState {
  todos: Todo[];
  isLoading: boolean;
}

const initialState: TodoSliceInitialState = {
  todos: [],
  isLoading: true,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodoRequest: (state) => {
      state.isLoading = true;
    },
    getTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
    },
    getTodoFailure: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
    },

    toggleTodoRequest: (state, action: PayloadAction<number>) => {
      state.isLoading = true;
    },
    toggleTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
    },
    toggleTodoFailure: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
    },

    // Mutation
    addTodoRequest: (state) => {
      state.isLoading = true;
    },

    addTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
    },

    addTodoFailure: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
    },

    deleteTodoRequest: (state, action: PayloadAction<number>) => {
      state.isLoading = true;
    },
    deleteTodoSuccess: (state, action) => {},
    deleteTodoFailure: (state, action) => {},

    // no request
    getAll: (state) => state,
    getCompleted: (state) => {
      state.todos = state.todos.filter(({ isCheck }) => isCheck);
    },
    getUnCompleted: (state) => {
      state.todos = state.todos.filter(({ isCheck }) => !isCheck);
    },
  },
});

const { reducer, actions } = todoSlice;

export const {
  getAll,
  getCompleted,
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
  getUnCompleted,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
} = actions;

export default reducer;
