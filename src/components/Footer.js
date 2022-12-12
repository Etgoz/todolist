import React, { useContext } from "react";
import { ListContext } from "../providers/ListContext";

export function Footer() {
	const { clearAllCompleted, notCompleted } = useContext(ListContext);

	return (
		<footer className="footer" style={{ boxSizing: "content-box" }}>
			<span className="todo-count">
				<strong>{notCompleted}</strong> items left
			</span>
			<button className="clear-completed" onClick={clearAllCompleted}>
				Clear completed
			</button>
		</footer>
	);
}
