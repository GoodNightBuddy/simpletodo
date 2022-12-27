import { TodosAction } from "./actions";
import { ActionType } from "./actionsTypes";

export interface Todo {
  id: string;
  body: string;
}

export type TodosState = Todo[] | [];

export const initialState = JSON.parse(localStorage.getItem('todos') + '') || [];

export const todosReducer = (state: TodosState, action: TodosAction) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      const newTodos = [action.payload, ...state];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;

    case ActionType.REMOVE_TODO:
      const newTodos_ = state.filter(todo => todo.id !== action.payload);;
      localStorage.setItem('todos', JSON.stringify(newTodos_));
      return newTodos_;

    default:
      throw new Error('Unhandled case in todoReducer!');
  }
}