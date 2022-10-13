import {useMemo, useState} from "react";

export default function useSortTransactions(items){
    const [sortBy, setSortBy] = useState( null);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortBy !== null) {
            // rough job due to time constraints
            switch(sortBy) {
                case 'income':
                    sortableItems = sortableItems.sort((a, b) => (a.amount.value > b.amount.value ? -1 : a.amount.value < b.amount.value ? 1 : 0))
                    break;
                case 'outgoings':
                    sortableItems = sortableItems.sort((a, b) => (a.amount.value > b.amount.value ? 1 : a.amount.value < b.amount.value ? -1 : 0))
                    break;
                case 'category':
                    sortableItems = sortableItems.sort((a, b) => a.category_title.localeCompare(b.category_title))
                    break;
                case 'date':
                    sortableItems = sortableItems.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                break;
            }
        }
        return sortableItems;
    }, [items, sortBy]);

    const requestSort = (key) => {
        setSortBy(key);
    }

    return { sortedTransactions: sortedItems, requestSort };
}