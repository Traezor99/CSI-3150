import logo from "./logo.svg";
import "./App.css";
//import Navbar from "./components/Navbar";
//import Card from "./compnents/Card";
import FormsTutorial from "./compnents/FormsTutorial";

function App() {
    return (
        <div className="container">
            {/*<Navbar />
            <Card
                img={"path"}
                rating={4.9}
                reviewCount={20}
                city="Detroit"
                title="Title"
                price={93}
    />*/}
            <FormsTutorial />
        </div>
    );
}

export default App;
