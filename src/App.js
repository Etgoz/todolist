import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
	const appTitle = "TodosApp";

	let todos = [
		{ id: Date.now(), title: "Learn React", completed: false },
		{ id: Date.now() + 1, title: "Listen to Nir React", completed: false },
		{ id: Date.now() + 2, title: "Learn JS", completed: false },
	];

	// Events
	const addTodo = (title) => {
		todos = todos.concat([{ id: Date.now(), title, completed: false }]);
		console.log(todos);
	};

	const removeTodo = (todoToRemove) => {
		todos = todos.filter((currentTodo) => currentTodo.id !== todoToRemove.id);
		console.log(todos);
	};

	// todo: where should we implemnt it?
	const markAsCompleted = (todoToComplete, checkFlag) => {
		todoToComplete.completed = checkFlag;
		console.log(todos);
	};

	const clearAllCompleted = () => {
		todos = todos.filter((currentTodo) => !currentTodo.completed);
		console.log(todos);
	};

	const toggleAll = (checkedValue) => {
		todos = todos.map((todo) => ({ ...todo, completed: checkedValue }));
		console.log(todos);
	};

	// todo: pass title, placeholder to header
	// todo: pass item left to footer

	// todo: BONUS THINK ABOUT EDIT IN PLACE (DOUBLE CLICK TO VHANGE ITEM)

	return (
		<section className="todoapp">
			<Header
				title={appTitle}
				onAddItem={addTodo}
				text="What needs to be done?"
			/>
			<Main
				items={todos}
				onRemove={removeTodo}
				onComplete={markAsCompleted}
				onToggleAll={toggleAll}
			/>
			<Footer onClearAll={clearAllCompleted} itemsLeftCount={4} />
		</section>
	);
}

export default App;
