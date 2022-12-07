import React from "react";

export function Footer({ onClearAll, itemsLeftCount }) {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{itemsLeftCount}</strong> items left
			</span>
			<button className="clear-completed" onClick={onClearAll}>
				Clear completed
			</button>
		</footer>
	);
}
