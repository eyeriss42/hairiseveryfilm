import "./App.css";
import { useState } from "react";
import Deck from "./components/Deck/Deck.tsx";
import Intro from "./components/Intro/Intro.tsx";

function App() {
  const [isDeckLoaded, setIsDeckLoaded] = useState(false);

  const handleOkayClick = () => {
    setIsDeckLoaded(true);
  };

  return (
    <>
      <header className="header">hair is everyfilm</header>

      <div className="content-wrapper">
        {!isDeckLoaded ? (
          <div className="intro">
            <Intro onOkayClick={handleOkayClick} />
          </div>
        ) : (
          <div className="deck">
            <Deck />
          </div>
        )}
      </div>
      <footer>
        thank you,{" "}
        <a
          href="https://www.youtube.com/watch?v=q97iIDx-b7U"
          target="_blank"
          rel="noopener noreferrer"
        >
          fleabag
        </a>
      </footer>
    </>
  );
}

export default App;
