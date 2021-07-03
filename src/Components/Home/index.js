import React, { useContext } from "react";
import { Context } from "../Context";
import SubmitForm from "./Components/SubmitForm/index";
import ContactsSection from "./Containers/ContactsSection";
import TitleSection from "./Containers/TitleSection";

export default function Home() {
  const { contacts } = useContext(Context);
  const renderLoading = () => {
    return <div>Loading Contacts...</div>;
  };
  return (
    <>
      <TitleSection>
        <h1>My Contacts</h1>
        <SubmitForm />
      </TitleSection>
      <ContactsSection>
        {!contacts && renderLoading()}
        {contacts}
      </ContactsSection>
    </>
  );
}
