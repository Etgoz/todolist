import React from "react";

export default function TaskItem({ item }) {
	return (
		<li>
			<div className="view">
				<input className="toggle" type="checkbox" />
				<label>{item.title}</label>
				<button className="destroy" />
			</div>
			<input className="edit" />
		</li>
	);
}
