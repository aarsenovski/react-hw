const MoodDisplay = ({ mood, emojiMap }) => {
  return (
    <div>
      <h2>Current Mood:</h2>
      {mood ? (
        <p>
          {mood} {emojiMap[mood]}
        </p>
      ) : (
        <p>No mood selected</p>
      )}
    </div>
  );
};

export default MoodDisplay;
