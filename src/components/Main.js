import React from "react";

export function Main({ items, onRemove, onComplete, onToggleAll }) {
	function handleDestroyClick(event) {
		const clickedTaskTitle =
			event.target.parentElement.querySelector("label").textContent;
		items.forEach((item) => {
			if (item.title === clickedTaskTitle) {
				onRemove(item);
			}
		});
	}

	function handleCompleteClick(event) {
		const isChecked = event.target.checked;
		const clickedTaskTitle =
			event.target.parentElement.querySelector("label").textContent;
		items.forEach((item) => {
			if (item.title === clickedTaskTitle) {
				onComplete(item, isChecked);
			}
		});
	}

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
			<ul className="todo-list">
				{items.map((item) => (
					<li>
						<div className="view">
							<input
								className="toggle"
								type="checkbox"
								onClick={handleCompleteClick}
							/>
							<label>{item.title}</label>
							<button className="destroy" onClick={handleDestroyClick} />
						</div>
						<input className="edit" />
					</li>
				))}
				;
			</ul>
		</section>
	);
}
