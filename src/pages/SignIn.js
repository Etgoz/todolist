import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

export function SignIn() {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const { setCurrentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	function handleSubmit() {
		// const signInInfo = {
		// 	email: emailInputRef.current.value,
		// 	password: passwordInputRef.current.value,
		// };

		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then((response) => response.json)
			.then((user) => {
				setCurrentUser(user);
				navigate("/lists");
			});
	}

	return (
		<div className="container-sm text-center">
			<main className="d-inline-block w-50 form-signin m-auto">
				<form>
					<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

					<div className="form-floating">
						<input
							type="email"
							ref={emailInputRef}
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
						/>
						<label>Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="password"
							ref={passwordInputRef}
							className="form-control"
							id="floatingPassword"
							placeholder="Password"
						/>
						<label>Password</label>
					</div>
					<button
						className="w-100 btn btn-lg btn-primary"
						onClick={handleSubmit}
						type="button"
					>
						Sign in
					</button>
				</form>
			</main>
		</div>
	);
}
