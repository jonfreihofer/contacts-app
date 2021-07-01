import "./App.css";
import React, { useContext } from "react";
import { Context } from "./Components/Context";
import SubmitForm from "./Components/SubmitForm/index";
import ContactsSection from "./Containers/ContactsSection";
import TitleSection from "./Containers/TitleSection";

function App() {
  const { contacts } = useContext(Context);
  const renderLoading = () => {
    if (!contacts) {
      console.log("loading");
      return <div>Loading Contacts...</div>;
    }
    if (contacts) return null;
  };
  return (
    <>
      <TitleSection>
        <h1>My Contacts</h1>
        <SubmitForm />
      </TitleSection>
      <ContactsSection>
        {renderLoading()}
        {contacts}
      </ContactsSection>
    </>
  );
}

export default App;
