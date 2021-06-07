import styled from "styled-components";

const StyledPopUp = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 250px;
  background: #23d5ab;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  display: ${({ showPopUp }) => (showPopUp ? "flex" : "none")};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    padding: 4rem;
    text-align: center;
  }
  button {
    height: 40px;
    background-color: purple;
    font-weight: bolder;
    text-transform: uppercase;
    color: white;
    border: none;
    margin: 3px;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
  }
`;
export default StyledPopUp;
