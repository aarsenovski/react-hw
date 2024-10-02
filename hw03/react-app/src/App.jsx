import { useState } from "react";
import MoodDisplay from "./components/MoodDisplay";
import MoodSelector from "./components/MoodSelector";
import Parent from "./components/Parent";

const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
};

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
  const [currentMood, setCurrentMood] = useState("");

  return (
    <>
      <div>
        <h1>Family Tree</h1>
        <Parent family={family} />
      </div>
      <div>
        <div>
          <h1>Mood Tracker</h1>
          <MoodSelector setCurrentMood={setCurrentMood} />
          <MoodDisplay mood={currentMood} emojiMap={moodEmojiMap} />
        </div>
      </div>
    </>
  );
};

export default App;
