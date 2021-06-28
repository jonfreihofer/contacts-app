import styled from "styled-components";

const StyledTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  color: white;
  @media (max-width: 600px) {
    flex-wrap: none;
    flex-direction: column;
  }
`;

export default StyledTitleContainer;
