import "./App.css";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

function App() {
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
					/>
					<button className="bg-gradient-to-r from-blue-400 to-blue-600 py-2 px-4 rounded">
						<FaPlus />
					</button>
				</div>
			</div>

			<div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4">
				<ul>
					<li className="flex items-start justify-between bg-white p-3 rounded shadow-md mb-3">
						<span className="text-lg">Learn React</span>
						<div>
							<button className="mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounderd hover:from-gray-500 hover:to-gray-700">
								<FaPencilAlt />
							</button>
							<button className="mr-2 p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounderd hover:from-red-500 hover:to-red-700">
								<FaTrash />
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
