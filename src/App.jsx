import React from "react";
import "./App.css";
import DisplayTransaction from "./assets/table";
import PostTransaction from "./assets/post";

function App() {
  return (
    <>
      <h1>FLATIRON BANK</h1>
      <PostTransaction/>      
      <DisplayTransaction />

    </>
  );
}

export default App;
