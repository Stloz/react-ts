import React from "react";
import "./App.css";

// Type

type User = {
  id: number;
  name: string;
};

type UserList = User[];

const user: User = { id: 223344, name: "John" };

//* my variant
// const userList: UserList = [user];
// const userList: User[] = [];
// const user: User = { id: 223344, name: "John" };
// userList.push(user);
// console.log(userList);

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello type {user.name}</header>
    </div>
  );
}

export default App;
