import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="ball">
      <h1
        className="count" // Ensure the "count" class is applied to the h1 element
        onDoubleClick={() => {
          alert("cant edit it");
        }}
      >
        {count}
      </h1>
      <button
        className="increment-button" // Add a class name to the button element
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
