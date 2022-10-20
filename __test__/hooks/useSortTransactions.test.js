import { render, cleanup, act } from '@testing-library/react';
import useSortTransactions from "../../src/common/hooks/useSortTransactions";
import {sort} from "css-loader/dist/utils";

afterEach(cleanup)

const transactions = [
        {
            "id": "13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28",
            "date": "2018-06-30",
            "description": "Tesco",
            "category_title": "Groceries",
            "amount": {
                "value": -57.21,
                "currency_iso": "GBP"
            }
        },
        {
            "id": "dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc",
            "date": "2018-06-22",
            "description": "Max Mustermann",
            "category_title": "Income",
            "amount": {
                "value": 510.55,
                "currency_iso": "GBP"
            }
        },
        {
            "id": "b11de7abd717eae696d2eedca9c24e5df7652b59a7ad200d43aa88321d908694342d",
            "date": "2018-07-03",
            "description": "Amazon",
            "category_title": "Shopping",
            "amount": {
                "value": -99.95,
                "currency_iso": "GBP"
            }
        },
        {
            "id": "a483bdde46390271ff377949455817a71d3cdf11a3492b2c921477b751265ee9aba4",
            "date": "2018-07-05",
            "description": "Transport for London",
            "category_title": "Transport",
            "amount": {
                "value": -2.85,
                "currency_iso": "GBP"
            }
        },
        {
            "id": "c09f785b61c0fa361dc143b7331551d8b4cc58349774fae6f61d696564bbebd74db0",
            "date": "2018-07-09",
            "description": "Pret a Manger",
            "category_title": "Eating Out",
            "amount": {
                "value": -35.87,
                "currency_iso": "GBP"
            }
        },
        {
            "id": "051ea3de7e32086e24a29a8fbbb575a48964f12b95016679bf7bb8a004fd08813d01",
            "date": "2018-07-02",
            "description": "Gaucho",
            "category_title": "Eating Out",
            "amount": {
                "value": -151.25,
                "currency_iso": "GBP"
            }
        },
]

function setup(...args) {
    const returnVal = {}
    function TestComponent() {
        Object.assign(returnVal, useSortTransactions(...args))
        return null
    }
    render(<TestComponent />)
    return returnVal
}

describe('useSortTransactions', () => {
    it('should sort transactions by highest value', async () => {
        const sortableTransactions = setup(transactions);

        await act(() => {
            sortableTransactions.requestSort('income');
        })

        expect(sortableTransactions.sortedTransactions[0].amount.value).toBe(510.55);
        expect(sortableTransactions.sortedTransactions[5].amount.value).toBe(-151.25)

    });

    it('should sort transactions by lowest value', async () => {
        const sortableTransactions = setup(transactions);

         act(() => {
            sortableTransactions.requestSort('outgoings');
        })

        expect(sortableTransactions.sortedTransactions[0].amount.value).toBe(-151.25);
        expect(sortableTransactions.sortedTransactions[5].amount.value).toBe(510.55)
    })

    it('should sort transactions by category', async () => {
        const sortableTransactions = setup(transactions);

        await act(() => {
            sortableTransactions.requestSort('category');
        })

        // same category
        expect(sortableTransactions.sortedTransactions[0].category_title).toBe("Eating Out");
        expect(sortableTransactions.sortedTransactions[1].category_title).toBe("Eating Out");

        // different category
        expect(sortableTransactions.sortedTransactions[2].category_title).toBe("Groceries");
    })

    it('should sort transactions by date', async () => {
        const sortableTransactions = setup(transactions);

        await act(() => {
            sortableTransactions.requestSort('date');
        })

        console.log(sortableTransactions.sortedTransactions);
        expect(sortableTransactions.sortedTransactions[0].date).toBe("2018-06-22")
        expect(sortableTransactions.sortedTransactions[5].date).toBe("2018-07-09")
    })
})