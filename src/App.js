import "./App.css";
import { Route, RouterProvider, Routes } from "react-router-dom";

import Home from "./pages/Home";

function App() {
	return (
		<RouterProvider>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</RouterProvider>
	);
}

export default App;
