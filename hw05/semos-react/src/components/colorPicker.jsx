import { useState } from "react";
const ColorPicker = () => {
  const [chosenColor, setChosenColor] = useState("");

  const colors = ["red", "green", "blue", "yellow"];

  const chooseColor = (color) => {
    setChosenColor(color);
  };

  return (
    <>
      <div className="color-picker">
        <div className="color-buttons">
          {colors.map((color) => (
            <button
              key={color}
              className={`color-${color}-btn`}
              style={{ backgroundColor: color }}
              onClick={() => chooseColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
      <div
        className="display-box"
        style={{
          color: "black",
          backgroundColor: chosenColor || "white",
          marginTop: "40px",
          padding: "5px",
          borderRadius: "16px",
        }}
      >
        {chosenColor ? `Selected Color: ${chosenColor}` : "Pick a color"}
      </div>
    </>
  );
};

export default ColorPicker;
