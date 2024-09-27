import ListItem from "./components/ListItem";

function App() {
  const tasks = [
    { name: "Learn React", priority: "High" },
    { name: "Do Groceries", priority: "Low" },
    { name: "Exercise", priority: "High" },
    { name: "Read a Book", priority: "Medium" },
  ];

  return (
    <div>
      <h1>Tasks List</h1>
      <ListItem taskItems={tasks} />
    </div>
  );
}

export default App;
