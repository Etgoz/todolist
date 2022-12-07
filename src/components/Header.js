import React from "react";

export function Header({ title, onAddItem }) {
	function handleKeyDown(event) {
		if (event.key === "Enter") {
			const newTask = event.target.value;
			event.target.value = "";
			onAddItem(newTask);
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
