import React, {useState} from 'react';
import styled from "styled-components";
import useFetch from 'src/common/hooks/useFetch';
import useSortTransactions from "src/common/hooks/useSortTransactions";
import Card from "./common/Card";
import TransactionList from "./common/transactions/TransactionList";

const TransactionsHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`

const SortMenu = styled.nav`
    position: relative;
`

const MenuButton = styled.button`
    background: none;
    border: none;
    font-size: 1.4rem;
    width: 2rem;
    padding: 0;
`

const MenuList = styled.ul`
    display: ${props => props.visible ? "block" : "none"};
    padding: 0 .5rem;
    position: absolute;
    top: 2rem;
    right: 0;
    min-width: 8rem;
    background: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`

const MenuListItem = styled.li`
    padding: 1rem;
    font-size: .6rem;
    cursor: pointer;
    transition: padding .3s;
    
    &:hover {
        padding-left: 1.2rem
    }
`


function TransactionView(props) {
    const [menuVisible, setMenuVisible] = useState(false)
    const { isLoading, apiData, serverError} = useFetch(
        "5c62e7c33000004a00019b05",
        'GET'
        // no body this time, chaps
    );

    const balance = apiData?.balance || {};
    const provider =  apiData?.provider || {};

    const transactions = apiData?.transactions || [];

    const { sortedTransactions, requestSort } = useSortTransactions(transactions);


    const handleMenuClick = (menuItem) => {
        setMenuVisible(false);
        requestSort(menuItem)
    }





    return (
        <div>
            <Card
                balance={ balance }
                provider={ provider }
                loading={ isLoading }
            />

            <TransactionsHeader>
                <h2>Recent Transactions</h2>

                <SortMenu>
                    <MenuButton onClick={() => setMenuVisible(!menuVisible)}>&#8942;</MenuButton>

                    { /* very basic menu due to time constraints */}
                    <MenuList visible={ menuVisible }>
                        <MenuListItem onClick={() => handleMenuClick("income")}>Income</MenuListItem>
                        <MenuListItem onClick={() => handleMenuClick("outgoings")}>Outgoings</MenuListItem>
                        <MenuListItem onClick={() => handleMenuClick("category")}>Category</MenuListItem>
                        <MenuListItem onClick={() => handleMenuClick("date")}>Date</MenuListItem>
                    </MenuList>
                </SortMenu>
            </TransactionsHeader>

            { sortedTransactions && (
                <TransactionList
                    transactions={ sortedTransactions }
                    loading={ isLoading }
                    serverError={ serverError }
                />
            )}

        </div>
    );
}

export default TransactionView;