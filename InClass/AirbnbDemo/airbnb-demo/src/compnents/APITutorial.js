import React from "react";

function APITutorial() {
    const [starWarsData, setStarWarsData] = React.useState();

    React.useEffect(() => {
        fetch("https://swapi.dev/api/people/")
            .then((res) => res.json())
            .then((data) => setStarWarsData(data))
            .catch((error) => console.log("Error occured"));
    }, []);

    return <pre>{JSON.stringify(starWarsData, null, 2)}</pre>;
}

export default APITutorial;
