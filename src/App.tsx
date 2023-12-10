import "./App.css";
import Swipe from "./Swipe.tsx";
// import nomadland from "/src/assets/nomadland.jpeg";
import Intro from './Intro';
// 

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1 className="header-title">hair is everyfilm</h1>
        </header>

        <div className="intro">
            <Intro />
          </div>

        <section className="main">
      
          <Swipe />
        </section>
      </div>
      <footer>
        <p>
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
      </footer>

      {/* //test imports  */}
      {/* <img src={nomadland} alt="Nomadland" /> */}
    </>
  );
}

export default App;
