import "./App.css";
import { nanoid } from "nanoid";
function TodoApp() {
  const [todos, setTodos] = useState([]);
}
const presetTodos = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Learn React" },
  { id: 3, text: "Go for a walk" },
];

function newTodo() {
  setTodos((prev) => [...prev, newTodo]);
}

export default App;
