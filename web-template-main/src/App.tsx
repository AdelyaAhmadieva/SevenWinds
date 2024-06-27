import './App.style.scss'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MainBlock from "./components/MainBlock/MainBlock";

export function App() {
    return (
      <>
        <Header/>
          <div className="container">
              <NavBar/>
              <MainBlock/>
          </div>

      </>

    );
}
