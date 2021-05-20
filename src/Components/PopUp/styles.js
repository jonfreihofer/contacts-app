import styled from "styled-components";

const StyledPopUp = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 200px;
  background: #23d5ab;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  display: ${({ showPopUp }) => (showPopUp ? "flex" : "none")};
  flex-direction: row;
  justify-conent: space-between;

  h2 {
    padding: 4rem;
    text-align: center;
  }
  button {
    height: 40px;
  }
`;
export default StyledPopUp;
