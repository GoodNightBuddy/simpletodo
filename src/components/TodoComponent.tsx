import { HStack, IconButton, keyframes, Spacer, Text } from "@chakra-ui/react";
import { Todo } from "../context/reducer";
import { FaTrash, FaTrashRestore } from 'react-icons/fa';
import {  useState, useContext } from 'react';
import { TodoContext } from "../context/context";
import { insertBefore, removeTodo } from '../context/actions';

const animation = keyframes`
from {
  background: inherit
}

to {
  background: lightblue
}

10%, 90% {
  transform: translate3d(-1px, 0, 0);
}

20%, 80% {
  transform: translate3d(2px, 0, 0);
}

30%, 50%, 70% {
  transform: translate3d(-4px, 0, 0);
}

40%, 60% {
  transform: translate3d(4px, 0, 0);
}
`
const myAnimation = `${animation} infinite 1s`

interface ITodoProps {
  todo: Todo
}

const TodoComponent: React.FC<ITodoProps> = ({todo}) => {

  const [isHover, setIsHover] = useState(false);
  const [, dispatch] = useContext(TodoContext);

  const removeHandler = (id: string): void => {
    if (!dispatch) return;
    dispatch(removeTodo(id))
  }

  let dragId: string | null;

  const dragStartHandler: React.DragEventHandler<HTMLDivElement> = e => {
    dragId = e.currentTarget.getAttribute('data-todoid');
  };

  const dragEndHandler: React.DragEventHandler<HTMLDivElement> = e => {
    const targetId = document.elementFromPoint(e.clientX, e.clientY)?.closest('div[data-todoid]')?.getAttribute('data-todoid');

    if (targetId && targetId !== dragId && dispatch && dragId) {
      dispatch(insertBefore(dragId, targetId));
    }
  };

  return (
    <HStack
          draggable='true'
          cursor={'grab'}
          onDragStart={dragStartHandler}
          onDragEnd={dragEndHandler}
          data-todoid={todo.id}
          _active={{cursor: 'grabbing'}}
          _grabbed={{cursor: 'grabbing'}}
          _pressed={{cursor: 'grabbing'}}
        >
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            onPointerEnter={() => setIsHover(true)}
            onPointerLeave={() => setIsHover(false)}
            icon={isHover ? <FaTrashRestore /> : <FaTrash />}
            aria-label={''}
            isRound
            onClick={() => removeHandler(todo.id)}
            _hover={{
              animation: myAnimation
            }}
          />
        </HStack>
  );
};

export default TodoComponent;