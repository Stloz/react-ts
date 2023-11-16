import React from "react";
import "./App.css";

// Generics Conditional Types

type IsFunction<T> = T extends (...args: any[]) => any ? T : null;

const name = "Jhon";
const handleChange = () => alert("click");

const myFunction: IsFunction<typeof handleChange> = handleChange;

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello Conditional Types</header>
    </div>
  );
}

export default App;
