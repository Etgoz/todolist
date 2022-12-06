import React from "react";

export default function TaskItem() {
	return (
		<li>
			<div class="view">
				<input class="toggle" type="checkbox" />
				<label>Todo Title</label>
				<button class="destroy" />
			</div>
			<input class="edit" />
		</li>
	);
}
