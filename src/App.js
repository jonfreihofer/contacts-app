import "./App.css";
import React, { useContext } from "react";
import { Context } from "./Components/Context";
import SubmitForm from "./Components/SubmitForm/index";
import ContactsSection from "./Containers/ContactsSection";
import TitleSection from "./Containers/TitleSection";

function App() {
  const { contacts } = useContext(Context);
  return (
    <>
      <TitleSection>
        <h1>My Contacts</h1>
        <SubmitForm />
      </TitleSection>

      <ContactsSection>{contacts}</ContactsSection>
    </>
  );
}

export default App;
