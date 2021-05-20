import React, { useState } from "react";
import StyledContact from "./styles.js";
import StyledButton from "../Button/styles.js";
import PopUp from "../PopUp";

function Contact({ firstName, lastName, removeContact, id }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <PopUp
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
        firstName={firstName}
        removeContact={removeContact}
        id={id}
      />
      <StyledContact>
        <h3>
          {firstName} {lastName}
        </h3>
        <StyledButton onClick={() => setShowPopUp(!showPopUp)}>
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
    </>
  );
}

export default Contact;
