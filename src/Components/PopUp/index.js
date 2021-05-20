import React from "react";
import StyledPopUp from "./styles";

function PopUp({ children, showPopUp }) {
  return (
    <StyledPopUp>
      <h2> Are you sure you want to delete ${}?</h2>
    </StyledPopUp>
  );
}

export default PopUp;
