import { Todo } from '@/models/model';
import React from 'react'
import SingleTodo from './SingleTodo';

interface Props {
	todos: Array<Todo>;
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos, setTodos}:Props) => {
	return (
		<div className='flex flex-wrap gap-[1rem] flex-evenly'>
			{todos.map((todo) => (
				<SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
			))}
		</div>
	)
}

export default TodoList