import React from "react";
import StyledPopUp from "./styles";

function PopUp({ showPopUp, setShowPopUp, firstName, removeContact, id }) {
  return (
    <>
      <StyledPopUp showPopUp={showPopUp}>
        <h2> Remove {firstName} from Contacts?</h2>
        <button onClick={() => setShowPopUp(!showPopUp)}>No</button>
        <button onClick={() => removeContact(id)}>Yes</button>
      </StyledPopUp>
    </>
  );
}

export default PopUp;
