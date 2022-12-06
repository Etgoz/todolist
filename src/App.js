import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

function App() {
	const appTitle = "TodosApp";

	const todos = [
		{ title: "Learn React", completed: false },
		{ title: "Listen to Nir React", completed: false },
		{ title: "Learn JS", completed: true },
	];

	// Events
	const addTodo = (title) => {
		todos.push({ title, completed: false });
		console.log(todos);
	};

	const removeTodo = (index) => {
		todos.splice(index, 1);
		console.log(todos);
	};

	// todo: where should we implemnt it?
	const markAsCompleted = (index, checkFlag) => {
		todos[index].completed = checkFlag;
		console.log(todos);
	};

	const clearAllCompleted = () => {};

	const toggleAll = () => {};

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
			<Main items={todos} onRemove={removeTodo} onComplete={markAsCompleted} />
			<Footer />
		</section>
	);
}

export default App;
