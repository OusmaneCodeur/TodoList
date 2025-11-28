import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css";

function App() {

  return (
    <div className="app-shell">
      <div className="app-card">
        <h1 className="app-title">La liste des tâches</h1>
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
}

export default App;
