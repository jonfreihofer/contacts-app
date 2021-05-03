import React, { useState } from "react";
import Contact from "../Contact";
import Button from "../Button";
import { StyledForm, StyledInput } from "./styles";

function SubmitForm({ children }) {
  const [inputData, setInputData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
  });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputData.firstName === "" || inputData.lastName === "") {
      alert("Please Enter A Contact");
      return;
    }
    //pushes contact data into contacts array
    setContactsData((prevContacts) => [...prevContacts, inputData]);
    //automatically sorts last name by alphabetical order
    setContactsData((prevContacts) =>
      prevContacts.sort((a, b) => a.lastName.localeCompare(b.lastName))
    );
    setInputData((prevInputData) => ({
      id: prevInputData.id + 1,
      firstName: "",
      lastName: "",
    }));
  }

  function removeContact(id) {
    setContactsData((prevContact) =>
      prevContact.filter((contact) => {
        return contact.id !== id;
      })
    );
  }

  const contacts = contactsData.map((contact) => (
    <Contact
      key={contact.firstName + contact.lastName}
      firstName={contact.firstName}
      lastName={contact.lastName}
      id={contact.id}
      removeContact={removeContact}
    >
      {children}
    </Contact>
  ));

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <StyledInput
          placeholder="FIRST NAME"
          name="firstName"
          type="text"
          value={inputData.firstName}
          onChange={handleChange}
        />
        <br />
        <StyledInput
          placeholder="LAST NAME"
          name="lastName"
          type="text"
          value={inputData.lastName}
          onChange={handleChange}
        />
        <Button>Add Contact</Button>
      </form>
      {contacts}
    </StyledForm>
  );
}

export default SubmitForm;
