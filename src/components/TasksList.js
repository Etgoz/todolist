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

	function handleStartEdit(ev, item) {
		if (!editable) {
			setEditable(true);
			ev.target.parentElement.parentElement.className += "editing";
			ev.target.parentElement.parentElement.querySelector(".edit").value =
				item.title;
		}
	}

	function handleFinishEdit(event, item) {
		if (event.key === "Enter") {
			setEditable(false);
			item.title = event.target.value;
			event.target.parentElement.querySelector("label").innerHTML = item.title;
			document.querySelector(".editing").classList.remove("editing");
		}
	}

	return (
		<ul className="todo-list">
			{items.map((item) => (
				<li
					className={`${item.completed ? "completed" : ""}`}
					onDoubleClick={(ev) => handleStartEdit(ev, item)}
					onKeyDown={(ev) => handleFinishEdit(ev, item)}
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
