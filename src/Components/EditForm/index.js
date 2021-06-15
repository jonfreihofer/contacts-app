import React, { useContext } from "react";
import { StyledInput } from "../SubmitForm/styles.js";
import { Context } from "../Context";

export default function EditForm() {
  const { setContactsData, handleChange, inputData, id } = useContext(Context);

  const editContact = (id, e) => {
    e.preventDefault();
    setContactsData((prevContact) =>
      prevContact.reduce((acc, contact) => {
        acc.push(contact);
        if (contact.id === id) {
          contact.firstName = contact.editName;
          acc.push(contact);
        }
        return acc;
      }, [])
    );
  };
  return (
    <form onSubmit={() => editContact(id)}>
      <StyledInput
        name="editName"
        placeHolder={`${inputData.firstName} ${inputData.lastName}`}
        value={inputData.editName}
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  );
}
