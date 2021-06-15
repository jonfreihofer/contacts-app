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
        <h3> Remove {renderName()}?</h3>
        <button className="btn-no" onClick={() => setShowPopUp(!showPopUp)}>
          No
        </button>
        <button className="btn-yes" onClick={() => removeContact(id)}>
          Yes
        </button>
      </StyledPopUp>
    </>
  );
}

export default PopUp;
