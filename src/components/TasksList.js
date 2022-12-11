import React, { useContext, useState } from "react";
import { ListContext } from "../providers/ListContext";

export function TasksList() {
	const [checked, setChecked] = useState(false);
	const [editable, setEditable] = useState(false);

	const { todos, removeTodo, markAsCompleted } = useContext(ListContext);

	function handleDestroyClick(event) {
		const clickedTaskTitle =
			event.target.parentElement.querySelector("label").textContent;
		todos.forEach((item) => {
			if (item.title === clickedTaskTitle) {
				removeTodo(item);
			}
		});
	}

	function handleCompleteClick(event) {
		const isChecked = event.target.checked;
		const clickedTaskTitle =
			event.target.parentElement.querySelector("label").textContent;
		todos.forEach((item) => {
			if (item.title === clickedTaskTitle) {
				markAsCompleted(item, isChecked);
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
			event.target.parentElement.classList.remove("editing");
		}
	}

	return (
		<ul className="todo-list">
			{todos.map((item) => (
				<li
					className={`${item.completed ? "completed" : ""}`}
					key={item.id}
					onDoubleClick={(ev) => handleStartEdit(ev, item)}
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
					<input
						className="edit"
						onKeyDown={(ev) => handleFinishEdit(ev, item)}
					/>
				</li>
			))}
		</ul>
	);
}
