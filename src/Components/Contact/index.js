import React from "react";
import StyledContact from "./styles.js";
import StyledButton from "../Button/styles.js"

function Contact({ children, firstName, lastName,  removeContact, id }) {
    return (
        <StyledContact>
            <h3>First Name: {firstName} </h3>
            <h3>Last Name: {lastName}</h3>
            <StyledButton onClick={() => removeContact(id)}>
                Delete
            </StyledButton>
        </StyledContact>
    )
}

export default Contact