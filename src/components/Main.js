import React from "react";
import TaskItem from "./TaskItem";

export default function Main() {
	return (
		<section class="main">
			<input class="toggle-all" type="checkbox" />
			<ul class="todo-list">
				<TaskItem />
			</ul>
		</section>
	);
}
