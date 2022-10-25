const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function MyCustomComponent() {
    return (
        <div>
            <h1>Header</h1>
            <p>Paregraph with some cool text</p>
        </div>
    );
}

root.render(
    <div>
        <MyCustomComponent />
    </div>
);
