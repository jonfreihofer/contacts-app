import React from "react";
import StyledPopUp from "./styles";

function PopUp({
  showPopUp,
  setShowPopUp,
  firstName,
  lastName,
  editName,
  removeContact,
  id,
}) {
  const renderName = () => {
    return <div>{editName ? `${editName}` : `${firstName}`}</div>;
  };
  return (
    <>
      <StyledPopUp showPopUp={showPopUp}>
        <h3> Remove {renderName()} from Contacts?</h3>
        <button onClick={() => setShowPopUp(!showPopUp)}>No</button>
        <button onClick={() => removeContact(id)}>Yes</button>
      </StyledPopUp>
    </>
  );
}

export default PopUp;
