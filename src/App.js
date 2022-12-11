import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/Todos-app";

function App() {
	const [lists, setLists] = useState([{ id: Date.now(), title: "TodosApp" }]);

	const handleAddList = (ev) => {
		const parent = ev.target.parentElement;
		const newListTitle = parent.querySelector("input").value;
		setLists([...lists, { id: Date.now(), title: newListTitle }]);
	};

	return (
		<>
			<input type="text" />
			<input type="button" value="Add List" onClick={handleAddList} />
			{lists.map((listTitle) => (
				<TodoList appName={listTitle.title} key={listTitle.id} />
			))}
		</>
	);
}

export default App;
