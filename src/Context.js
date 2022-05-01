import React, { useState, useContext } from 'react'
import { SELECT_ALL_PRODUCTS, SELECT_SOME_FROM_PRODUCTS, SELECT_SUPPLIER_GREATER, MAP_PRODUCTS_TO_COMPANIES } from './Constants'

const QueryContext = React.createContext();

export function useQuery() {
    return useContext(QueryContext)
}

export function QueryProvider({ children }) {
    const [query, setQuery] = useState(SELECT_ALL_PRODUCTS);
    const [history, setHistory] = useState([]);
    const [savedQuery, setSavedQuery] = useState([
        SELECT_ALL_PRODUCTS,
        SELECT_SOME_FROM_PRODUCTS,
        SELECT_SUPPLIER_GREATER,
        MAP_PRODUCTS_TO_COMPANIES
    ])

    const addToHistory = (newQuery) => setHistory(prev => [...prev, newQuery]);
    const addToSaved = (newQuery) => setSavedQuery(prev => [newQuery, ...prev]);

    return (
        <QueryContext.Provider value={{ query, history, savedQuery, setQuery, addToHistory, addToSaved }}>
            {children}
        </QueryContext.Provider>
    );
}
