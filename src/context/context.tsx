import React, { Dispatch } from "react";
import { TodosAction } from "./actions";
import { TodosState } from "./reducer";

type TodoContext = [TodosState, Dispatch<TodosAction>]

export const TodoContext  = React.createContext<TodoContext | []>([]);
