import { useState } from "react";
import "./App.css";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

function App() {
	const [todos, setTodos] = useState([{ id: 1, todo: "Learn React" }]);
	const [input, setInput] = useState("");

	const addTodo = async () => {
		try {
			if (input.trim() !== "") {
				setTodos([...todos, { id: new Date(), todo: input }]);
				setInput("");
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className="min-h-screen flex flex-col gap-4 justify-center items-center bg-custom-background bg-center bg-cover">
			<div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4">
				<h1 className="text-3xl font-bold text-center mb-2">
					Todo App
				</h1>
				<div className="flex">
					<input
						type="text"
						placeholder="Add Todo"
						className="py-2 px-4 mr-2 rounded w-full focus:outline-none"
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
					<button
						onClick={addTodo}
						className="bg-gradient-to-r from-blue-400 to-blue-600 py-2 px-4 rounded"
					>
						<FaPlus />
					</button>
				</div>
			</div>

			{todos.length > 0 && (
				<div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4">
					<ul>
						{todos.map((todo, index) => (
							<li
								key={index}
								className="flex items-start justify-between bg-white p-3 rounded shadow-md mb-3"
							>
								<span className="text-lg">{todo.todo}</span>
								<div>
									<button className="mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounderd hover:from-gray-500 hover:to-gray-700">
										<FaPencilAlt />
									</button>
									<button className="mr-2 p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounderd hover:from-red-500 hover:to-red-700">
										<FaTrash />
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;
