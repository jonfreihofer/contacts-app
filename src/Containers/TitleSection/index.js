import React from "react";
import StyledTitleContainer from "./styles"

const TitleContainer = ({children}) => {
    return (
        <StyledTitleContainer>
            {children}
        </StyledTitleContainer>
    )
}

export default TitleContainer;