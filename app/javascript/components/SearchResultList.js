import React, { useContext } from 'react';
import SearchContext from './contexts/SearchContext';


const SearchResultList = () => {
    const { searchResults } = useContext(SearchContext);
    return (
        <ul>
            {searchResults.map((result) => () => {
                return <li>{result}</li>;
            }
            )}
        </ul>
    )
};
export default SearchResultList;
