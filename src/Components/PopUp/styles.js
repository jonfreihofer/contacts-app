import styled from "styled-components";
//todo: fix button issue when short names are entered
const StyledPopUp = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 200px;
  background: #23d5ab;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  display: ${({ showPopUp }) => (showPopUp ? "in-line block" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-content: center;

  h3 {
    padding: 1px;
    text-align: center;
  }

  .popup-buttons {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
    border: solid pink 1px;
  }

  .no {
    margin: 8px;
    width: 20px;
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
  .yes {
    margin: 8px;
    width: 20px;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  button {
    max-width: 35px;
    height: 40px;
    background-color: purple;
    font-weight: bolder;
    text-transform: uppercase;
    color: white;
    border: none;
    margin: 3px;
    position: relative;

    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
  }
`;
export default StyledPopUp;
