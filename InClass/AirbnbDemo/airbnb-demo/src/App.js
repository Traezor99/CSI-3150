import logo from "./logo.svg";
import "./App.css";
//import Navbar from "./components/Navbar";
//import Card from "./compnents/Card";
import FormsTutorial from "./compnents/FormsTutorial";
import APITutorial from "./compnents/APITutorial";

function App() {
    return (
        <div className="container">
            <FormsTutorial />
            <APITutorial />
        </div>
    );
}

export default App;
