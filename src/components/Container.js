import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  height: 100vh;
`

function Container(props) {
    return (
        <StyledContainer>
            { props.children }
        </StyledContainer>
    );
}

export default Container;