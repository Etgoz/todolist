import React from "react";

export function Header({ title, onAddItem }) {
	function handleKeyDown(event) {
		if (event.key === "Enter") {
			return onAddItem(event.target.value);
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
