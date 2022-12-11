import { useState, useEffect } from "react";

export function useTodos() {
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

	return {
		todos,
		notCompleted,
		addTodo,
		removeTodo,
		markAsCompleted,
		clearAllCompleted,
		toggleAll,
	};
}
