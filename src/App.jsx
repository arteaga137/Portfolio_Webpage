import "./App.css";
import Banner from "./components/banner/banner";
import NavBar from "./components/navBar/navBar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <Banner></Banner>
        <Skills></Skills>
      </div>
    </>
  );
}

export default App;
