import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Theory from "../pages/Theory";
import Example from "../pages/Example";
import TheoryRouter from "./TheoryRouter";
import Exercise from "../pages/Exercise";
import ExampleRouter from "./ExampleRouter";
import ExerciseRouter from "./ExerciseRouter";
import "../styles/index.scss";

function AppRouter() {
	return (
		<div className="wrapper">
			<BrowserRouter>
				<Navbar />
				<div className="route-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/theories" element={<Theory />} />
						<Route path="/theories/:chapter" element={<TheoryRouter />} />
						<Route path="/examples" element={<Example />} />
						<Route path="/examples/:chapter" element={<ExampleRouter />} />
						<Route path="/exercises" element={<Exercise />} />
						<Route path="/exercises/:chapter" element={<ExerciseRouter />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default AppRouter;
