import React from 'react';
import { Todo } from './model'; 
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}  // This 'key' prop is automatically handled by React
          todos={todos}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
