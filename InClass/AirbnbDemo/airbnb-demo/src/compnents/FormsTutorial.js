import React from "react";

function FormsTutorial() {
    //State Management
    //Objects in the state must exactly match the name of the form element
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        checkBox: false,
        studentType: "",
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    //Form submit buttons refresh the page
    function handleSubmit(e) {
        e.preventDefault();
        //server side stuff
        console.log(formData);
    }

    return (
        //method is the type of HTTP query, action is what the sever on the backend will do
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstNameInput">Enter First Name: </label>
            <input
                className="textInput"
                id="firstNameInput"
                type="text"
                placeholder="Enter First Name Here"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <label htmlFor="lastNameInput">Enter Last Name: </label>
            <input
                className="textInput"
                id="lastNameInput"
                type="text"
                placeholder="Enter Last Name Here"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <label htmlFor="emailInput">Enter Email: </label>
            <input
                className="textInput"
                id="emailInput"
                type="text"
                placeholder="Enter Email Here"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                id="checkBox"
                type="checkbox"
                name="checkBox"
                value={formData.checkBox}
                onChange={handleChange}
            />
            <fieldset>
                {/*Names of radio button must be the same*/}
                <legend>Are you a student?</legend>
                <label htmlFor="full-time">Full Time: </label>
                <input
                    id="full-time"
                    type="radio"
                    name="studentType"
                    value="full-time"
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part Time: </label>
                <input
                    id="part-time"
                    type="radio"
                    name="studentType"
                    value="part-time"
                    onChange={handleChange}
                />
                <label htmlFor="no">No: </label>
                <input
                    id="no"
                    type="radio"
                    name="studentType"
                    value="no"
                    onChange={handleChange}
                />
            </fieldset>
            <select>
                {/*idk, can add options with value attributes to it*/}
            </select>
            <button>Submit</button>
        </form>
    );
}
//Must include the type, name, and value attributes for a form in React. The others are for convenience or CSS
export default FormsTutorial;
