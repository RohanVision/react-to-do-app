import { useState } from "react";
import "./App.css";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

function App() {
	const [todos, setTodos] = useState([{ id: 1, todo: "Learn React" }]); // to updated todos
	const [input, setInput] = useState(""); // to store the input value
	const [editIndex, setEditIndex] = useState(-1);

	// add todos function
	const addTodo = async () => {
		try {
			// trim the white space and input is not empty
			if (input.trim() !== "") {
				// setting up array with old todos and Object to with new todo which has id as new data and todo property
				setTodos([...todos, { id: new Date(), todo: input }]);
				setInput("");
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	// Editi ToDo
	const setEdit = (index) => {
		setInput(todos[index].todo);
		setEditIndex(index);
	};

	const updateTodos = async () => {
		try {
			const updateTodos = [...todos];
			updateTodos[editIndex].todo = input;
			setTodos(updateTodos);
			setEditIndex(-1);
			setInput("");
		} catch (error) {
			console.error(error.message);
		}
	};

	// Remove Todo
	const removeTodo = async (id) => {
		let filterTodos = todos.filter((todo) => todo.id !== id);
		setTodos(filterTodos);
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
						onClick={editIndex === -1 ? addTodo : updateTodos}
						className="bg-gradient-to-r from-blue-400 to-blue-600 py-2 px-4 rounded"
					>
						{editIndex === -1 ? <FaPlus /> : <FaPencilAlt />}
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
									<button
										onClick={() => setEdit(index)}
										className="mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounderd hover:from-gray-500 hover:to-gray-700"
									>
										<FaPencilAlt />
									</button>
									<button
										onClick={() => removeTodo(todo.id)}
										className="mr-2 p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounderd hover:from-red-500 hover:to-red-700"
									>
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
