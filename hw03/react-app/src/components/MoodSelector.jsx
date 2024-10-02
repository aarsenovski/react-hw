const MoodSelector = ({ setCurrentMood }) => {
  const moods = ["Happy", "Sad", "Excited", "Tired"];

  return (
    <div>
      <h2>Select Your Mood</h2>
      {moods.map((mood) => (
        <button key={mood} onClick={() => setCurrentMood(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
