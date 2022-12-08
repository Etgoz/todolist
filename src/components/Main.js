import React from "react";

export function Main({ onToggleAll, children }) {
	function handleToggleAll(event) {
		onToggleAll(event.target.checked);
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
