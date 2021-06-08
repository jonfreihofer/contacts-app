import React, { useState } from "react";
import StyledContact from "./styles.js";
import StyledButton from "../Button/styles.js";
import StyledInput from "../SubmitForm/styles.js";
import PopUp from "../PopUp";

function Contact({ firstName, lastName, removeContact, id }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [edit, setEdit] = useState(false);

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
        {edit && <StyledInput value={`${firstName} ${lastName}`} />}
        {!edit && (
          //todo: create context for input/onChange/value handling
          <h3>
            {firstName} {lastName}
          </h3>
        )}
        <StyledButton
          onClick={() => setShowPopUp(!showPopUp)}
          disabled={showPopUp}
        >
          Remove
        </StyledButton>
        <StyledButton className="edit" onClick={() => setEdit(!edit)}>
          Edit
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
