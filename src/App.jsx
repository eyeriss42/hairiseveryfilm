import { useState } from "react";
import "./App.css";
import Swipe from "./Swipe.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>hair is everyfilm</p>
      <Swipe/>
    </>
  );
}

export default App;
