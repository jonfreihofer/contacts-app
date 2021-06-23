import React, { useState, useContext } from "react";
import StyledContact from "./styles.js";
import StyledButton from "../Button/styles.js";
import StyledInput from "../SubmitForm/styles.js";
import PopUp from "../PopUp";
import { Context } from "../Context";

function Contact({
  firstName,
  lastName,
  editName,
  removeContact,
  handleSubmit,
  email,
  id,
}) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [edit, setEdit] = useState(false);
  const { inputRef, setContactsData, setInputData, handleChange } =
    useContext(Context);

  const upDateValue = (id) => {
    setContactsData((prevContact) =>
      prevContact.filter((contact) =>
        contact.id === id
          ? (contact.editName = inputRef.current.value)
          : contact
      )
    );
    // setContactsData((prevContact) =>
    //   prevContact.sort((a, b) => a.lastName.localeCompare(b.lastName))
    // );

    setInputData((prevInputData) => ({
      id: prevInputData.id,
      firstName: "",
      lastName: "",
      editName: "",
    }));
    // todo: change editName to replace both firstName and lastName values, for purpose of data continuity
    setEdit(false);
  };

  const renderInput = () => {
    return (
      <div>
        <StyledInput
          type="text"
          defaultValue={editName ? editName : `${firstName} ${lastName}`}
          name="editName"
          onChange={handleChange}
          ref={inputRef}
        />
        <StyledButton className="edit" onClick={() => upDateValue(id)}>
          Save
        </StyledButton>
      </div>
    );
  };

  const changeEditMode = () => {
    setEdit(!edit);
  };

  const renderData = () => {
    return (
      <div>
        {editName ? `${editName}` : `${firstName} ${lastName}`} <br />
        {email && `${email}`}
      </div>
    );
  };
  return (
    <>
      <PopUp
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
        firstName={firstName}
        lastName={lastName}
        editName={editName}
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
