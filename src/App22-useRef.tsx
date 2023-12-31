import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import "./App.css";
//import { ProductContext } from ".";
import { ProductContext } from "./index21-useContext";

type InitialState = {
  count: 0;
};

type State = {
  count: number;
};

type Action = {
  type: ACTION_TYPE;
};

enum ACTION_TYPE {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

const stateReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
): State => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
  }
};

const App: React.FC<{}> = () => {
  // const initState: InitialState = { count: 0 };

  // const initializer = (state: InitialState): State => ({
  //   ...state,
  //   count: 1,
  // });

  const [state, dispatch] = useReducer<
    React.Reducer<State, Action>,
    InitialState
  >(stateReducer, { count: 0 }, (state): State => ({ ...state, count: 1 }));

  const handleClick = () => {
    dispatch({ type: ACTION_TYPE.INCREMENT });
  };

  const ref = useRef<HTMLElement | null>(null);

  return (
    <div className="App">
      <header ref={ref} className="App-header">
        <p onClick={handleClick}>Count: {state.count}</p>
      </header>
    </div>
  );
};

export default App;
