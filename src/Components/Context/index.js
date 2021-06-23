import React, { useState, useRef, useEffect } from "react";
import Contact from "../Contact";

const Context = React.createContext();

function ContextProvider({ children }) {
  const inputRef = useRef(null);
  const [inputData, setInputData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    editName: "",
  });
  const [contactsData, setContactsData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      let users = await fetch("https://jsonplaceholder.typicode.com/users");
      let userData = await users.json();
      setContactsData(userData);
    };
    getUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.firstName || !inputData.lastName) {
      alert("Please Enter A First and Last Name");
      return;
    }
    //pushes contact data into contacts array
    setContactsData((prevContacts) => [...prevContacts, inputData]);
    //sorts last name by alphabetical order
    // setContactsData((prevContacts) =>
    //   prevContacts.sort((a, b) => a.lastName.localeCompare(b.lastName))
    // );
    setInputData((prevInputData) => ({
      id: prevInputData.id + 1,
      firstName: "",
      lastName: "",
      editName: "",
    }));
  };

  const removeContact = (id) => {
    setContactsData((prevContact) =>
      prevContact.filter((contact) => contact.id !== id)
    );
  };

  const contacts = contactsData.map((contact) => (
    <Contact
      key={contact.lastName}
      handleChange={handleChange}
      firstName={contact.firstName}
      editName={contact.name}
      email={contact.email}
      id={contact.id}
      removeContact={removeContact}
    >
      {children}
    </Contact>
  ));

  return (
    <Context.Provider
      value={{
        inputData,
        setInputData,
        contactsData,
        setContactsData,
        handleSubmit,
        handleChange,
        removeContact,
        contacts,
        inputRef,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
