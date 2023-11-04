import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import usePreventZoom from "./helpers/usePreventZoom";

function App() {
	usePreventZoom();
	return (
		<BrowserRouter basename={"/portfolio"}>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
