import React, { useEffect, useRef, useState } from 'react';
import { Todo } from "@/models/model";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBack2Line } from "react-icons/ri";
import { MdDoneAll } from "react-icons/md";
import { Input } from './ui/input';


type Props = {
	todo: Todo,
	todos: Todo[],
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}:Props) => {

	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo)
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

	const handleDone = (id: number) => {
		setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
	};
	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	};
	const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };


	return <form onSubmit={(e) => handleEdit(e, todo.id)} className='flex gap-[1.2rem] h-[4.5rem] justify-between w-[100%] items-center border-[1px] p-[1rem] rounded-[1rem]'>
		{
			edit ? (
				<Input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
			): todo.isDone ? (
						<s>{todo.todo}</s>
					): (
						<span>{todo.todo}</span>
					)
		}
			<div className='flex gap-[0.5rem] align-center'>
				<span onClick={() => {
					if(!edit && !todo.isDone) {
					setEdit(!edit);
				}}
				}><FiEdit2 /></span>
				<span onClick={() => handleDelete(todo.id)}><RiDeleteBack2Line /></span>
				<span onClick={() => handleDone(todo.id)}><MdDoneAll /></span>
			</div>
		</form>
}

export default SingleTodo