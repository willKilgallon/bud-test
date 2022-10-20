import React from 'react';
import styled from "styled-components";
import FormattedCurrency from "./FormattedCurrency";

const StyledCard = styled.div`
    padding: 1em;
    background: #2a2c2d;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    margin-bottom: 2rem;
`

const CardTop = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`

const AccountBalance = styled.div`
    color: #FFFFFF;
    font-size: 1.6rem;
`

const Provider = styled.span`
    color: #FFFFFF;
    font-size: .8rem;
`

// Not in the API response so hard coding it for now
const CardNumber = styled.span`
    color: #FFFFFF;
    font-family: 'PT Mono', monospace;
    margin-bottom: 2rem;
    display: block;
`

const CardBottom = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const SortCode = styled.span`
    color: #FFFFFF;
    font-family: 'PT Mono', monospace;
    font-size: .6rem;
`

const AccountType = styled.span`
    color: #FFFFFF;
    font-family: 'PT Mono', monospace;
    font-size: .4rem;
`

function Card({ balance, provider, loading}) {

    return (
        <StyledCard>
            { !loading && (
                <>
                    <CardTop>
                        <AccountBalance data-testid="account-balance">
                            <FormattedCurrency
                                currency={ balance?.currency_iso }
                                value={ balance?.amount }
                            />
                        </AccountBalance>

                        <Provider data-testid="account-provider">{ provider.title }</Provider>
                    </CardTop>

                    <CardNumber>1234 &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot;</CardNumber>

                    <CardBottom>
                        <SortCode data-testid="account-sort-code">{ provider.sort_code }</SortCode>

                        <AccountType data-testid="account-type">{ provider.description }</AccountType>
                    </CardBottom>
                </>
            ) }
        </StyledCard>
    );
}

export default Card;