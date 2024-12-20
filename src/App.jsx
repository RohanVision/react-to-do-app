import { useEffect, useState } from "react";
import { FaPlus, FaPencilAlt } from "react-icons/fa";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";
import TodoLists from "./components/TodoLists";

function App() {
	const [todos, setTodos] = useState([]); // to updated todos
	const [input, setInput] = useState(""); // to store the input value
	const [editIndex, setEditIndex] = useState(-1);

	useEffect(() => {
		const unSubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
			setTodos(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					todo: doc.data().todo,
				}))
			);
		});

		return () => unSubscribe();
	}, []);

	// add todos function
	const addTodo = async () => {
		try {
			// trim the white space and input is not empty
			if (input.trim() !== "") {
				// setting up array with old todos and Object to with new todo which has id as new data and todo property
				// setTodos([...todos, { id: new Date(), todo: input }]);
				// We are using method from firebase
				await addDoc(collection(db, "todos"), { todo: input });
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
			// we will using now firebase method
			const todoDocRef = doc(db, "todos", todos[editIndex].id);
			await updateDoc(todoDocRef, { todo: input });

			// const updateTodos = [...todos];
			// updateTodos[editIndex].todo = input;
			// setTodos(updateTodos);
			setEditIndex(-1);
			setInput("");
		} catch (error) {
			console.error(error.message);
		}
	};

	// Remove Todo
	const removeTodo = async (id) => {
		// let filterTodos = todos.filter((todo) => todo.id !== id);
		// setTodos(filterTodos);
		// Using method from database
		try {
			await deleteDoc(doc(db, "todos", id));
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
						onClick={editIndex === -1 ? addTodo : updateTodos}
						className="bg-gradient-to-r from-blue-400 to-blue-600 py-2 px-4 rounded"
					>
						{editIndex === -1 ? <FaPlus /> : <FaPencilAlt />}
					</button>
				</div>
			</div>

			{todos.length > 0 && (
				<TodoLists
					todos={todos}
					setEdit={setEdit}
					removeTodo={removeTodo}
				/>
			)}
		</div>
	);
}

export default App;
