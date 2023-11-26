import "./App.css";
import Swipe from "./Swipe.tsx";
// import nomadland from "/src/assets/nomadland.jpeg";

function App() {

  return (
    <>
       <div className="container">
            <h1 className="hairiseveryfilm">hair is everyfilm</h1>
        </div>

      <Swipe/>

      {/* //test imports  */}
      {/* <img src={nomadland} alt="Nomadland" /> */}
    </>
  );
}

export default App;
