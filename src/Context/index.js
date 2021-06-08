import React, { useState } from "react";
import Contact from "../Contact";

const Context = React.createContext();

function ContextProvider({ children }) {
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
    if (!inputData.firstName || !inputData.lastName) {
      alert("Please Enter A First and Last Name");
      return;
    }
    //pushes contact data into contacts array
    setContactsData((prevContacts) => [...prevContacts, inputData]);
    //sorts last name by alphabetical order
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
      prevContact.filter((contact) => contact.id !== id)
    );
  }

  const contacts = contactsData.map((contact) => (
    <Contact
      key={contact.firstName + contact.lastName}
      handleChange={handleChange}
      firstName={contact.firstName}
      lastName={contact.lastName}
      id={contact.id}
      removeContact={removeContact}
    >
      {children}
    </Contact>
  ));
  return (
    <Context.Provider
      value={
        (inputData,
        setInputData,
        contactsData,
        setContactsData,
        handleSubmit,
        handleChange,
        removeContact,
        contacts)
      }
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
