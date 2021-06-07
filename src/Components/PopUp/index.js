import React from "react";
import StyledPopUp from "./styles";

function PopUp({
  children,
  showPopUp,
  setShowPopUp,
  firstName,
  removeContact,
  id,
}) {
  return (
    <>
      <StyledPopUp showPopUp={showPopUp}>
        <h2> Are you sure you want to delete {firstName}?</h2>
        <button onClick={() => setShowPopUp(!showPopUp)}>No</button>
        <button onClick={() => removeContact(id)}>Yes</button>
      </StyledPopUp>
    </>
  );
}

export default PopUp;
