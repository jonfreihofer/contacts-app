import React, { useContext } from "react";
import { Context } from "../Context";
import Button from "../Button";
import { StyledForm, StyledInput } from "./styles";

function SubmitForm({ children }) {
  const { handleSubmit, handleChange, inputData, contacts } =
    useContext(Context);
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
