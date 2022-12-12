import React from "react";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<section className="py-5 text-center container">
			<div className="row py-lg-5">
				<h1 className="fw-light">Welcome!</h1>
				<p className="lead text-muted">
					Here you can create named checklists! <br />
					Just sign in and start working
				</p>
				<p>
					<Link to="/sign-in" className="btn btn-primary my-2">
						SIGN IN
					</Link>
				</p>
			</div>
		</section>
	);
}
