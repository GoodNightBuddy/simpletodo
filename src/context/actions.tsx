import { ActionType } from "./actionsTypes";
import { Todo } from "./reducer";

interface AddTodoAction {
  type: ActionType.ADD_TODO;
  payload: Todo;
};

interface RemoveTodoAction {
  type: ActionType.REMOVE_TODO;
  payload: string;
};

interface InsertBeforeTodoAction {
  type: ActionType.INSERT_BEFORE;
  payload: {
    dragId: string;
    targetId: string;
  };
};

interface InsertAfterTodoAction {
  type: ActionType.INSERT_AFTER;
  payload: {
    dragId: string;
    targetId: string;
  };
};

export type TodosAction =
  | AddTodoAction
  | RemoveTodoAction
  | InsertAfterTodoAction
  | InsertBeforeTodoAction;

export const addTodo = (todo: Todo): AddTodoAction => {
  return {
    type: ActionType.ADD_TODO,
    payload: todo
  }
};

export const removeTodo = (id: string): RemoveTodoAction => {
  return {
    type: ActionType.REMOVE_TODO,
    payload: id
  }
};

export const insertBefore = (dragId: string, targetId: string): InsertBeforeTodoAction => {
  return {
    type: ActionType.INSERT_BEFORE,
    payload: { dragId, targetId }
  }
};

export const insertAfter = (dragId: string, targetId: string): InsertAfterTodoAction => {
  return {
    type: ActionType.INSERT_AFTER,
    payload: { dragId, targetId }
  }
};