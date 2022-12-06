import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	const todos = [{}];
	return (
		<section class="todoapp">
			<Header />
			<Main />
			<Footer />
		</section>
	);
}

export default App;
