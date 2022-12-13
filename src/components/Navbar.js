import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { useNavigate } from "react-router-dom";

export function Navbar() {
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	function handleSignOut() {
		setCurrentUser(null);
		navigate("/home");
	}

	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/home">
					Todos
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-link" to="/home">
							Home
						</Link>
						{currentUser && (
							<Link className="nav-link" to="/lists">
								Lists
							</Link>
						)}
					</div>
				</div>
				<div className="justify-self-flex-end">
					{currentUser && (
						<>
							<span>Hello {currentUser.name} </span>
							<button onClick={handleSignOut}>sign out</button>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
