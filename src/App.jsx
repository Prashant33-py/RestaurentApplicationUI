import { useEffect, useState } from "react";
import { FoodItem } from "./components/FoodItem";
import "./App.css";

function App() {
	const [foodItems, setFoodItems] = useState([]);

	useEffect(() => {
		const getFoodItems = async () => {
			await fetch("http://localhost:8081/api")
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					setFoodItems(data);
				})
				.catch((err) => console.error(err));
		};
		getFoodItems();
	}, []);
	console.log(foodItems[0]);
	return (
		<>
			<div className="p-4">
				{foodItems.map((foodItem) => (
					<FoodItem
						key={foodItem.name}
						foodItem={foodItem}
					/>
				))}
			</div>
		</>
	);
}

export default App;
