import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e:React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAdd }:Props) => {
	return (
		<form className='flex' onSubmit={(e) => handleAdd(e)}>
			<Input value={todo} onChange={(e) => setTodo(e.target.value)} type='input' placeholder='what do we do?' className='text-muted-foreground placeholder: text-[1rem]' />
			<Button type='submit' className='text-[1rem] px-[2rem] ml-[-5.8rem]'>Add</Button>
		</form>
	)
}

export default InputField