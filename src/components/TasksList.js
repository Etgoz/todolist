import React, { useState } from "react";

export function TasksList({ items, onComplete, onRemove, onDblClick }) {
	const [checked, setChecked] = useState(false);
	const [editable, setEditable] = useState(false);

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

	function handleStartEdit(ev) {
		setEditable(true);
		ev.target.className.concat(`${editable ? " editing" : ""}`);
	}

	function handleFinishEdit(event) {
		if (event.key === "Enter") {
			setEditable(false);
		}
	}

	return (
		<ul className="todo-list">
			{items.map((item) => (
				<li
					className={`${item.completed ? "completed" : ""}`}
					onDoubleClick={handleStartEdit}
					onKeyDown={handleFinishEdit}
				>
					<div className="view">
						<input
							className="toggle"
							type="checkbox"
							checked={item.completed}
							onChange={() => setChecked(!checked)}
							onClick={handleCompleteClick}
						/>
						<label>{item.title}</label>
						<button className="destroy" onClick={handleDestroyClick} />
					</div>
					<input className="edit" />
				</li>
			))}
		</ul>
	);
}
