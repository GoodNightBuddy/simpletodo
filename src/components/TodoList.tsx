import { Badge,StackDivider, VStack } from '@chakra-ui/react';
import { useContext} from 'react';
import { TodoContext } from '../context/context';
import TodoComponent from './TodoComponent';

const TodoList = () => {
  const [todos] = useContext(TodoContext);

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
      {todos.map(todo => <TodoComponent todo={todo} key={todo.id}/> )}
    </VStack>
  );
};

export default TodoList;