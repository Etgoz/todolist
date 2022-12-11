import React, { useContext } from "react";
import { ListContext } from "../providers/ListContext";

export function Header({ title }) {
	const { addTodo } = useContext(ListContext);

	function handleKeyDown(event) {
		if (event.key === "Enter" && event.target.value) {
			const newTask = event.target.value;
			event.target.value = "";
			addTodo(newTask);
		}
	}

	return (
		<header className="header">
			<h1>{title}</h1>
			<input
				className="new-todo"
				onKeyDown={handleKeyDown}
				placeholder="What needs to be done?"
				autoFocus
			/>
		</header>
	);
}
