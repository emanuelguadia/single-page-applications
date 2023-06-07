import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Pages from "./components/pages/Pages";
function App() {
  return (
    <Router>
    <div
      className="App container container-sm container-md container-lg container-xl">
      <header className="App-header container-fluid bg-success">
        <Navbar/>
      </header>
      <Pages/>
    </div>
    </Router>
  );
}

export default App;
