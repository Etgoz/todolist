import React, { useContext } from "react";
import { ListContext } from "../providers/ListContext";

export function Main({ children }) {
	const { toggleAll } = useContext(ListContext);

	function handleToggleAll(event) {
		toggleAll(event.target.checked);
	}

	return (
		<section className="main">
			<input
				className="toggle-all"
				type="checkbox"
				onChange={handleToggleAll}
			/>
			{children}
		</section>
	);
}
