// import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button/Button";

function App() {
  return (
    <div className="App">
      <h1>Knitted Weights</h1>

      <Button
        variant="tertiary"
        label="Add task"
        onClick={() => console.log("Task added")}
      />
      <Button
        variant="primary"
        label="Edit"
        onClick={() => console.log("Task edited")}
      />
      <Button
        variant="secondary"
        label="Delete"
        onClick={() => console.log("Task deleted")}
      />
    </div>
  );
}

export default App;
