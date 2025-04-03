export function FoodItem({ foodItem }) {
	const foodIngredients = foodItem.ingredients.split(",");
	console.log(foodItem);

	return (
		<>
			{
				<div
					key={foodItem.name}
					className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-6">
					<p className="text-xl font-semibold text-gray-800">
						{foodItem.name}
					</p>
					<p className="text-gray-600 mt-2">{foodItem.description}</p>
					<ul>
						{foodIngredients.map((ingredient, i) => (
							<li key={i}>{ingredient}</li>
						))}
					</ul>
					<p>{foodItem.price}</p>
				</div>
			}
		</>
	);
}
