import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { addTodo } from '../context/actions';
import { TodoContext } from '../context/context';

const AddTodo = () => {
  const toast = useToast();
  const [content, setContent] = useState('');
  const [, dispatch] = useContext(TodoContext);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!dispatch) return;
    if (!content) {
      toast({
        title: 'Todo is empty!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })

      return;
    };
    dispatch(addTodo({ id: Math.random().toString(36), body: content }));
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='Learn chakraui'
          onChange={e => setContent(e.target.value)}
          value={content}
        />
        <Button
          colorScheme={'pink'}
          px='8'
          type='submit'
        >Add Todo</Button>
      </HStack>
    </form>
  );
};

export default AddTodo;