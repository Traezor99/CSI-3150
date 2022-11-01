import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./compnents/Card";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Card
                img={"path"}
                rating={4.9}
                reviewCount={20}
                city="Detroit"
                title="Title"
                price={93}
            />
        </div>
    );
}

export default App;
