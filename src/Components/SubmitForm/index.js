import React, { useContext } from "react";
import Button from "../Button";
import { Context } from "../Context";
import { StyledForm, StyledInput } from "./styles";

function SubmitForm({ children }) {
  const { handleSubmit, handleChange, inputData } = useContext(Context);

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
    </StyledForm>
  );
}

export default SubmitForm;
