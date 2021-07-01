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
  name,
  removeContact,
  handleSubmit,
  email,
  id,
  editEmail,
}) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [edit, setEdit] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { inputRef, setContactsData, setInputData, handleChange } =
    useContext(Context);

  const upDateValue = (id, name) => {
    const upDateUser = {
      id: id,
      name: inputRef.current.value,
      email: email,
    };
    const upDateOptions = {
      method: "PUT",
      body: JSON.stringify(upDateUser),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, upDateOptions)
      .then((res) => res.json())
      .then((put) => {
        setContactsData((prevContacts) => [...prevContacts, put]);
        setContactsData((prevContacts) =>
          prevContacts.filter((contact) => contact.name !== name)
        );
        setContactsData((prevContacts) => prevContacts.sort());
      });

    setInputData((prevInputData) => ({
      id: prevInputData.id,
      editName: "",
      editEmail: "",
    }));
    setEdit(false);
  };

  const renderInput = () => {
    return (
      <div>
        <StyledInput
          type="text"
          defaultValue={editName ? editName : `${name}`}
          name="newName"
          onChange={handleChange}
          ref={inputRef}
        />
        <StyledButton className="edit" onClick={() => upDateValue(id, name)}>
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
      <>
        {`${name}`} <br />
        {`${email}`}
      </>
    );
  };

  const displayHeart = () => {
    if (isFavorited) {
      return (
        <img
          className="favorite-star"
          src={"../images/filledstar.png"}
          alt="star icon"
          onClick={() => setIsFavorited(!isFavorited)}
        />
      );
    }
    if (hovered) {
      return (
        <img
          className="favorite-star"
          src={"../images/star.png"}
          alt="star icon"
          onClick={() => setIsFavorited(!isFavorited)}
        />
      );
    }
  };

  return (
    <>
      <PopUp
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
        name={name}
        removeContact={removeContact}
        id={id}
      />
      <StyledContact
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {edit ? (
          renderInput()
        ) : (
          <h3 style={{ cursor: "pointer" }} onDoubleClick={changeEditMode}>
            {renderData()}
          </h3>
        )}
        <StyledButton
          onClick={() => setShowPopUp(!showPopUp)}
          disabled={showPopUp}
        >
          Remove
        </StyledButton>
        {displayHeart()}
      </StyledContact>
    </>
  );
}

export default Contact;
