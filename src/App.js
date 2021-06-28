import "./App.css";
import React, { useContext } from "react";
import { Context } from "./Components/Context";
import SubmitForm from "./Components/SubmitForm/index";
import TitleContainer from "./Containers/TitleSection";

function App() {
  const { contacts } = useContext(Context);
  return (
    <>
      <h1>My Contacts</h1>
      <SubmitForm />
      <TitleContainer>{contacts}</TitleContainer>
    </>
  );
}

export default App;
