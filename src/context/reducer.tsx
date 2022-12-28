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
      state = [action.payload, ...state];
      localStorage.setItem('todos', JSON.stringify(state));
      return state;

    case ActionType.REMOVE_TODO:
      state = state.filter(todo => todo.id !== action.payload);;
      localStorage.setItem('todos', JSON.stringify(state));
      return state;

    case ActionType.INSERT_BEFORE:
      state = [...state];
      const replaceIndex = state.findIndex(todo => todo.id === action.payload.dragId);
      const isertIndex = state.findIndex(todo => todo.id === action.payload.targetId);
      const movedEl = state.splice(replaceIndex, 1)[0];
      state.splice(isertIndex, 0, movedEl);

      localStorage.setItem('todos', JSON.stringify(state));
      return state

      case ActionType.INSERT_AFTER:
      state = [...state];
      const _replaceIndex = state.findIndex(todo => todo.id === action.payload.dragId);
      const _isertIndex = state.findIndex(todo => todo.id === action.payload.targetId);
      const _movedEl = state.splice(_replaceIndex + 1, 1)[0];
      state.splice(_isertIndex, 0, _movedEl);

      localStorage.setItem('todos', JSON.stringify(state));
      return state

    default:
      throw new Error('Unhandled case in todoReducer!');
  }
}