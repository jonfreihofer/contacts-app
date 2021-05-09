import React, { useState } from "react";
import StyledContact from "./styles.js";
import StyledButton from "../Button/styles.js"

function Contact({ firstName, lastName, removeContact, id }) {
    const [isFavorited, setIsFavorited] = useState(false);
    return (
        <StyledContact>
            <h3>{firstName} {lastName}</h3>
            <StyledButton onClick={() => removeContact(id)}>
                Delete
            </StyledButton>
            <img
                className="favorite-star"
                src={isFavorited ? "../images/filledstar.png" : "../images/star.png"}
                alt="star icon"
                onClick={() => setIsFavorited(!isFavorited)}
            //todo: change to svg, turnery should be classname instead of directory
            />
        </StyledContact>
    )
}

export default Contact