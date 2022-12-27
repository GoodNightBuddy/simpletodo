import React, { ReactNode, useReducer } from 'react';
import { TodoContext } from './context';
import { initialState, todosReducer } from './reducer';

interface ProviderProps {
  children: ReactNode
};

const Provider: React.FC<ProviderProps> = ({children}) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState)

  return (
    <TodoContext.Provider value={[todos, dispatch]}>
      {children}
    </TodoContext.Provider >
  );
};

export default Provider;