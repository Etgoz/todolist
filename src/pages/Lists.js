import { useState, useRef } from "react";
import { TodoList } from "../components/Todos-app";

export function Lists() {
	const [lists, setLists] = useState([{ id: Date.now(), title: "TodosApp" }]);
	const inputTextRef = useRef(null);

	const handleAddList = (ev) => {
		const newListTitle = inputTextRef.current.value;
		setLists([...lists, { id: Date.now(), title: newListTitle }]);
	};

	return (
		<>
			<div className="container">
				<div className="input-group mb-3">
					<input
						ref={inputTextRef}
						type="text"
						className="form-control"
						placeholder="New List Name"
					/>
					<input
						type="button"
						value="Add List"
						onClick={handleAddList}
						className="btn btn-outline-secondary"
					/>
				</div>
				{lists.map((listTitle) => (
					<TodoList appName={listTitle.title} key={listTitle.id} />
				))}
			</div>
		</>
	);
}
