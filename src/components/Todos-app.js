import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { TasksList } from "./TasksList";
import React from "react";
import { ListContext } from "../providers/ListContext";
import { useTodos } from "../hooks/useTodos";

export function TodoList({ appName }) {
	const todosApi = useTodos();

	return (
		<ListContext.Provider value={todosApi}>
			<section className="todoapp">
				<Header title={appName} />
				<Main>
					<TasksList />
				</Main>
				<Footer />
			</section>
		</ListContext.Provider>
	);
}
