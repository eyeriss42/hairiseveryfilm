import "./App.css";
import { useState} from 'react';
import Deck from "./Deck.tsx";
import Intro from './Intro';

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

      {/* <div className="about">
            <Intro onLoaded={handleOkayClick}/>
          </div>
        

          {isDeckLoaded && (
          <div className="main">
            <Deck />
          </div>
        )} */}

      {/* <section className="main">
          <Deck onLoaded={handleOkayClick} />
        </section> */}
{/* 
      <footer>
        <p className="footer">
          {" "}
          thank you,{" "}
          <a
            href="https://www.youtube.com/watch?v=q97iIDx-b7U"
            target="_blank"
            rel="noopener noreferrer"
          >
            fleabag
          </a>
        </p>
      </footer> */}

 
    </>
  );
}

export default App;
