import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Theory from "../pages/Theory";
import Example from "../pages/Example";
import Nesting from "../theories/01_Nesting";
import Navbar from "./Navbar";

import "../styles/css/index.css";

function AppRouter() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}>
						Home
					</Route>
					<Route path="/theories" element={<Theory />}>
						Theories
					</Route>
					<Route path="/theories/1" element={<Nesting />}>
						Theories
					</Route>
					<Route path="/examples" element={<Example />}>
						Examples
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default AppRouter;
