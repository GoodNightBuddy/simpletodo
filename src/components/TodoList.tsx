import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { removeTodo } from '../context/actions';
import { TodoContext } from '../context/context';

const TodoList = () => {

  const [todos, dispatch] = useContext(TodoContext);

  const removeHandler =  (id: string): void => {
    if(!dispatch) return;
    dispatch(removeTodo(id))
  }

  if (!todos || !todos.length) {
    return (
      <Badge
        colorScheme={'green'}
        p='4'
        mt='8'
        borderRadius={4}
      >
        Yay! No todos!
      </Badge>
    )
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor={'gray.100'}
      borderWidth="2px"
      p="4"
      borderRadius={'lg'}
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40wv' }}
      alignItems='stretch'
    >
      {todos.map(todo => (
        <HStack key={todo.id} >
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            aria-label={''}
            isRound
            onClick={() => removeHandler(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;