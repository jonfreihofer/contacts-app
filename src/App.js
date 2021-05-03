import "./App.css";
import React from "react";
import SubmitForm from "./Components/SubmitForm/index";
import TitleContainer from "./Containers/TitleSection";

function App() {
  return (
    <>
      <TitleContainer>
        <h1>My Contacts</h1>
        <SubmitForm />
      </TitleContainer>
    </>
  );
}

export default App;
