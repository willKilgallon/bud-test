import React from 'react';
import styled from "styled-components";
import FormattedCurrency from "../FormattedCurrency";

const StyledTransaction = styled.article`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: .8rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
`

const TransactionDetailsContainer = styled.div`
    display: flex;

`

const handleTransactionIconEmoji = category => {
    switch(category){
        case 'Shopping':
            return '🛍'
            break;
        case 'Groceries':
            return '🛒'
            break;
        case 'Eating Out':
            return '🍽'
            break;
        case 'Entertainment':
            return '🍿'
            break;
        case 'Transport':
            return '🚗'
            break;
        case 'Income':
            return '💰'
            break;
        case 'Bills':
            return '💲️'
            break;
    }
}
const TransactionIcon = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 5px;
    background: #ffcb66;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:before {
        content: "${({category}) => handleTransactionIconEmoji(category)}";
    }
`

const TransactionInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TransactionTitle = styled.h3`
    font-size: .7rem;
`

const TransactionDate = styled.time.attrs(props => ({
    datetime: props.datetime,
}))`
    font-size: .5rem;
    color: #2a2c2d;
`

const TransactionAmount = styled.aside`
    font-size: .8rem;
    color: ${props => props.isIncome ? "#06d6a0" : "#ef476f"}
`

function Transaction({ transaction }) {
    const isIncome = Math.sign(transaction.amount.value) > 0;
    const transactionDate = new Intl.DateTimeFormat('en-GB').format(new Date(transaction.date));

    return (
        <StyledTransaction>
            <TransactionDetailsContainer>
                <TransactionIcon
                    category={ transaction.category_title }
                />

                <TransactionInfo>
                    <TransactionTitle>{ transaction.description }</TransactionTitle>

                    <TransactionDate datetime={ transactionDate }>{ transactionDate }</TransactionDate>
                </TransactionInfo>
            </TransactionDetailsContainer>

            <TransactionAmount
                isIncome={ isIncome }
            >
                <FormattedCurrency
                    currency={ transaction.amount.currency_iso }
                    value={ transaction.amount.value }
                />
            </TransactionAmount>
        </StyledTransaction>
    );
}

export default Transaction;