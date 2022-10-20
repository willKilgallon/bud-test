import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Card from '../src/components/banking/common/Card';

afterEach(cleanup);

const balance = {
    amount: 999999.99, // lods of emone
    currency_iso: "USD"
}
const provider =  {
    title: "Test Bank",
    account_number: "1111111",
    sort_code: "22-33-44",
    description: "Savings Account"
}

const card = (
    <Card
        balance={balance}
        provider={provider}
    />
);

describe('Card', () => {
    it('should render', () => {
        render(card)
    });

    it('should display the account balance', () => {
        const { getByTestId } = render(card);
        expect(getByTestId('account-balance')).toHaveTextContent("US$999,999.99")
    })

    it('should display the account provider', () => {
        const { getByTestId } = render(card);
        expect(getByTestId('account-provider')).toHaveTextContent("Test Bank")
    })

    it('should display the account sort code', () => {
        const { getByTestId } = render(card);
        expect(getByTestId('account-sort-code')).toHaveTextContent("22-33-44")
    })

    it('should display the account type', () => {
        const { getByTestId } = render(card);
        expect(getByTestId('account-type')).toHaveTextContent("Savings Account")
    })
})
