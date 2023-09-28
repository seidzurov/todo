import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import InputField from "./components/InputField"
import { Todo } from "./models/model";
import TodoList from "./components/TodoList";

const App:React.FC = () => {

	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Array<Todo>>([]);

	const handleAdd = (e:React.FormEvent) => {
		e.preventDefault();

		if(todo) {
			setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
			setTodo('');
		}
	}

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex align-center justify-between pt-10 px-10">
				<span className="text-xl">qqowtodo</span>
				<ModeToggle />
			</div>
			<div className="text-center w-[50%] mx-auto mb-[2rem] pt-[150px] text-5xl text-[#e0e0e0]">
				<h1 className="mb-10">👀</h1>
				<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			</div>
			<div className="w-[50%] mx-auto">
				<TodoList todos={todos} setTodos={setTodos} />
			</div>
    </ThemeProvider>
  )
}

export default App
