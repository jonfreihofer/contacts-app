import React, { useState, useContext } from "react";
import StyledContact from "./styles.js";
import StyledButton from "../Button/styles.js";
import PopUp from "../PopUp";
import { Context } from "../Context";

function Contact({
  firstName,
  lastName,
  editName,
  removeContact,
  handleSubmit,
  id,
}) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [edit, setEdit] = useState(false);
  const { inputRef, setContactsData, handleChange } = useContext(Context);

  const upDateValue = (id) => {
    setContactsData((prevContact) =>
      prevContact.filter((contact) =>
        contact.id === id
          ? (contact.editName += inputRef.current.value)
          : contact
      )
    );
    // editName = inputRef.current.value;
    // setContactsData((prevContacts) => [...prevContacts, editName]);
    setEdit(false);
  };

  const renderInput = () => {
    return (
      <div>
        <input
          type="text"
          defaultValue={`${firstName} ${lastName}`}
          name="editName"
          onChange={handleChange}
          ref={inputRef}
        />
        <StyledButton className="edit" onClick={() => upDateValue(id)}>
          {" "}
          Save{" "}
        </StyledButton>
      </div>
    );
  };

  const changeEditMode = () => {
    setEdit(!edit);
  };

  const renderData = () => {
    return <div>{editName ? `${editName}` : `${firstName} ${lastName}`}</div>;
  };
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
        {edit ? (
          renderInput()
        ) : (
          <h3 onDoubleClick={changeEditMode}>{renderData()}</h3>
        )}
        <StyledButton
          onClick={() => setShowPopUp(!showPopUp)}
          disabled={showPopUp}
        >
          Remove
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
