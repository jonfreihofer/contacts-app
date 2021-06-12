import React from "react";
import { StyledInput } from "../SubmitForm/styles.js";
import Button from "../Button";

export default function EditForm({
  handleChange,
  inputData,
  id,
  firstName,
  lastName,
  editName,
  contactsData,
  setContactsData,
}) {
  const editSubmit = (id, e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={editSubmit}>
      <StyledInput
        name="editName"
        placeHolder={`${id.firstName} ${id.lastName}`}
        value={inputData.editName}
        onChange={handleChange}
      />
      <Button>Save</Button>
    </form>
  );
}
