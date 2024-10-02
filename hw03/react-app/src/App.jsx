import Parent from "./components/Parent";

const App = () => {
  const family = {
    name: "John (Parent)",
    children: [
      {
        name: "Alex (Child)",
        age: 30,
        grandchildren: [
          { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
          { name: "Sophia (Grandchild)", hobby: "Drawing" },
        ],
      },
      {
        name: "Emma (Child)",
        age: 28,
        grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
      },
    ],
  };

  return (
    <div>
      <h1>Family Tree</h1>
      <Parent family={family} />
    </div>
  );
};

export default App;
