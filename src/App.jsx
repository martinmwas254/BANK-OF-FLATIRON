import React from "react";
import "./App.css";
import DisplayTransaction from "./assets/table";
import PostTransaction from "./assets/post";

function App() {
  return (
    
    <div>
   
      <h1>FLATIRON BANK</h1>
      <PostTransaction/> 
      <div style={{marginLeft:"25%",marginRight:"25%",marginTop:"1%"}}>     
      <DisplayTransaction />
      </div>
    </div>
  );
}

export default App;
