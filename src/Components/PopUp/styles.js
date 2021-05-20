import styled from "styled-components";

const StyledPopUp = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  display: ${({ showPopUp }) => (showPopUp ? "inline-block" : "none")};
`;
export default StyledPopUp;
