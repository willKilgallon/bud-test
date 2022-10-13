import React from 'react';
import styled from "styled-components";
import Transaction from "./Transaction";

const StyledTransactionList = styled.section`
    padding-bottom: 4rem;
`
function TransactionList({ transactions, loading, serverError }) {


    return (
        <StyledTransactionList>
            { transactions.map((transaction) =>
                <Transaction
                    key={ transaction.id }
                    transaction={ transaction }
                />
            )}
        </StyledTransactionList>
    );
}

export default TransactionList;