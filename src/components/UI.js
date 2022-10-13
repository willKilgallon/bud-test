import React from 'react';
import styled from "styled-components";

import TransactionView from "./banking/TransactionView";

const Container = styled.div`
    padding: 3em 1em 0;
    max-width: 100%;
    max-height: 100%;
    overflow-y: scroll;
`

function UI(props) {
    return (
        <Container>
            <TransactionView />
        </Container>
    );
}

export default UI;