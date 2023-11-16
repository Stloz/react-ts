import React from "react";
import "./App.css";

// Generic Types

class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

let numberBox = new Box<number>(10);
let stringBox = new Box<string>("Typestring");

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello Generic Types</header>
    </div>
  );
}

export default App;
