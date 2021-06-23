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
        <div className="popup-buttons">
          <button className="no" onClick={() => setShowPopUp(!showPopUp)}>
            No
          </button>
          <button className="yes" onClick={() => removeContact(id)}>
            Yes
          </button>
        </div>
      </StyledPopUp>
    </>
  );
}

export default PopUp;
