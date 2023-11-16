import React from "react";
import "./App.css";

enum COLOR {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

console.log(COLOR);

function displayColor(color: COLOR): void {
  if (color === COLOR.RED) console.log("The selected color id red.");
  else if (color === COLOR.GREEN) console.log("The selected color id green.");
  else if (color === COLOR.BLUE) console.log("The selected color id blue.");
  else console.log("Invalid color");
}

const selectedColor: COLOR = COLOR.GREEN;
displayColor(selectedColor);

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello enum </header>
    </div>
  );
}

export default App;
