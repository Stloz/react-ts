import React from "react";
import "./App.css";

class Counter {
  count: number = 0;

  increment() {
    this.count++;
  }
}

function IncrementMixin<
  T extends new (...args: any[]) => {
    increment: (...args: any[]) => any;
    count: number;
  }
>(Base: T) {
  return class extends Base {
    incrementAndLog() {
      this.increment();
      console.log(`Count is now: ${this.count}`);
    }
  };
}

const CountingCounter = IncrementMixin(Counter);

const counter = new CountingCounter();
counter.incrementAndLog();

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello mixin</header>
    </div>
  );
}

export default App;
