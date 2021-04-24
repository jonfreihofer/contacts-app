import React from "react";

function Contact({ Children, firstName, lastName }) {
    return (
        <>
            <h2>First Name: {firstName} </h2>
            <h2>Last Name: {lastName}</h2>
            <button>Delete</button>
        </>
    )
}

export default Contact