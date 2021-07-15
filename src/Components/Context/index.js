import React, { useState, useRef, useEffect } from "react";
import Contact from "../Contact";

const Context = React.createContext();

function ContextProvider({ children }) {
  const inputRef = useRef(null);
  const [inputData, setInputData] = useState({
    id: 0,
    editName: "",
    editEmail: "",
  });
  const [contactsData, setContactsData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      let users = await fetch("https://jsonplaceholder.typicode.com/users");
      let userData = await users.json();
      let sortedData = userData.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setContactsData(sortedData);
      setIsLoading(false);
    };
    getUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.editName) {
      alert("Please Enter A First and Last Name");
      return;
    }
    const newUser = {
      id: inputData.id,
      name: inputData.editName,
      email: inputData.editEmail,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("https://jsonplaceholder.typicode.com/users", options)
      .then((res) => res.json())
      .then((post) => {
        setContactsData((prevContacts) =>
          [...prevContacts, post].sort((a, b) => a.name.localeCompare(b.name))
        );
      });
    //pushes contact data into contacts array
    setInputData((prevInputData) => ({
      id: prevInputData.id + 1,
      editName: "",
      editEmail: "",
    }));
  };

  const removeContact = (name) => {
    setContactsData((prevContact) =>
      prevContact.filter((contact) => contact.name !== name)
    );
  };

  const contacts = contactsData.map((contact) => (
    <Contact
      key={contact.name}
      handleChange={handleChange}
      name={contact.name ? contact.name : contact.editName}
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
        favorites,
        setFavorites,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
