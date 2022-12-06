import React from "react";

export function Footer() {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>0</strong> items left
			</span>
			<button className="clear-completed">Clear completed</button>
		</footer>
	);
}
