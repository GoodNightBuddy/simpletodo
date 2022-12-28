import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { FaSun, FaMoon } from "react-icons/fa";

export const App = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        aria-label={""}
        isRound size={'lg'}
        alignSelf="end"
        onClick={toggleColorMode}
      />
      <Heading
        pb='8'
        fontWeight={'extrabold'}
        size="2xl"
        bgGradient={'linear(to-r, pink.500, pink.300, blue.500)'}
        backgroundClip='text'
      >
        Todo application</Heading>
      <TodoList />
      <AddTodo />
    </VStack>

  )
}
