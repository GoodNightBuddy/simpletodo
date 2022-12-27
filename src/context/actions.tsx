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

export type TodosAction = AddTodoAction | RemoveTodoAction;

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