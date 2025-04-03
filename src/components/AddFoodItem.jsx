import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddFoodItem() {
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		ingredients: "",
		price: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch("http://localhost:8081/api/addFoodItem", {
			body: JSON.stringify(formData),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		}).catch((err) => {
			console.error(err);
		});
		navigate("/");
	};

	return (
		<div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
			<h2 className="text-2xl font-semibold text-gray-700 mb-4">
				Add New Food Item
			</h2>
			<form
				onSubmit={handleSubmit}
				className="space-y-4">
				<div>
					<label className="block text-gray-600 font-medium mb-1">
						Name
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>
				<div>
					<label className="block text-gray-600 font-medium mb-1">
						Description
					</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required></textarea>
				</div>
				<div>
					<label className="block text-gray-600 font-medium mb-1">
						Ingredients
					</label>
					<input
						type="text"
						name="ingredients"
						value={formData.ingredients}
						onChange={handleChange}
						className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>
				<div>
					<label className="block text-gray-600 font-medium mb-1">
						Price ($)
					</label>
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
						className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
					Submit
				</button>
			</form>
		</div>
	);
}
