import { FoodItem } from "./components/FoodItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetAllFoodItems } from "./components/GetAllFoodItems";
import { AddFoodItem } from "./components/AddFoodItem";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<GetAllFoodItems />}
					/>
					<Route
						path="/addFoodItem"
						element={<AddFoodItem />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
