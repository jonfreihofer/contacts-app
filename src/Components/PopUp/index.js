import React from "react";
import StyledPopUp from "./styles";

function PopUp({
  showPopUp,
  setShowPopUp,
  firstName,
  lastName,
  removeContact,
  id,
}) {
  const renderName = () => {
    return <div>{firstName ? `${firstName}` : `${lastName}`}</div>;
  };
  return (
    <>
      <StyledPopUp showPopUp={showPopUp}>
        <h2> Remove {renderName()}?</h2>
        <button onClick={() => setShowPopUp(!showPopUp)}>No</button>
        <button onClick={() => removeContact(id)}>Yes</button>
      </StyledPopUp>
    </>
  );
}

export default PopUp;
