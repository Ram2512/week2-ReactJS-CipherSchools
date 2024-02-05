import React, { useState } from "react";
const signUpForm = () => {
    const [state, setState] = useState({
        firstName: "",
        secondName: "",
        email: "",
        password: "",
    });
    
    let handlerChange = (e) =>
    setState({ ...state[e.target.name]: e.target.value});

    return (
        <form>
            <label>First Name</label>
            <input name = {"firstName"}
            type = {"text"}
            onChange = {handlerChange}
            value = {state.firstName}
            placeholder = {"First Name"}
            />

            <label>Last Name</label>
            <input name = {"LastName"}
            type = {"text"}
            onChange = {handlerChange}
            value = {state.lastName}
            placeholder = {"Last Name"}
            />

            <label>Email</label>
            <input name = {"email"}
            type = {"text"}
            onChange = {handlerChange}
            value = {state.email}
            placeholder = {"Email"}
            />

            <label>password</label>
            <input name = {"password"}
            type = {"text"}
            onChange = {handlerChange}
            value = {state.password}
            placeholder = {"password"}
            />

            <button type = {"submit"}>
                Submit
            </button>
        </form>
    );
};
