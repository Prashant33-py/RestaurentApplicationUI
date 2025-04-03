import { useState, useEffect } from "react";
import { FoodItem } from "./FoodItem";

export function GetAllFoodItems() {
	const [foodItems, setFoodItems] = useState([]);

	useEffect(() => {
		const getFoodItems = async () => {
			await fetch("http://localhost:8081/api/getAllFoodItems")
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
