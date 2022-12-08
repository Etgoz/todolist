import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { TasksList } from "./components/TasksList";
import React, { useEffect, useState } from "react";

function App() {
	const appTitle = "TodosApp";
	const [todos, setTodos] = useState([]);
	const [notCompleted, setNotCompleted] = useState(0);

	useEffect(() => {
		const uncompleted = todos.filter((task) => !task.completed);
		setNotCompleted(uncompleted.length);
	}, [todos]);

	// Events
	const addTodo = (title) => {
		const newTodos = todos.concat([
			{ id: Date.now(), title, completed: false },
		]);
		setTodos(newTodos);
	};

	const removeTodo = (todoToRemove) => {
		const newTodos = todos.filter(
			(currentTodo) => currentTodo.id !== todoToRemove.id
		);
		setTodos(newTodos);
	};

	// todo: where should we implemnt it?
	const markAsCompleted = (taskToComplete, checkFlag) => {
		taskToComplete.completed = checkFlag;
		const newTodos = [...todos];
		setTodos(newTodos);
	};

	const clearAllCompleted = () => {
		const newTodos = todos.filter((currentTodo) => !currentTodo.completed);
		setTodos(newTodos);
	};

	const toggleAll = (checkedValue) => {
		const newTodos = todos.map((todo) => ({
			...todo,
			completed: checkedValue,
		}));
		setTodos(newTodos);
	};

	// todo: pass title, placeholder to header
	// todo: pass item left to footer

	// todo: BONUS THINK ABOUT EDIT IN PLACE (DOUBLE CLICK TO VHANGE ITEM)

	return (
		<section className="todoapp">
			<Header
				title={appTitle}
				onAddItem={addTodo}
				text="What needs to be done?"
			/>
			<Main items={todos} onToggleAll={toggleAll}>
				<TasksList
					items={todos}
					onComplete={markAsCompleted}
					onRemove={removeTodo}
				/>
			</Main>
			<Footer onClearAll={clearAllCompleted} itemsLeftCount={notCompleted} />
		</section>
	);
}

export default App;
