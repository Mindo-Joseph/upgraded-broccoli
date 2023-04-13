import React, {useState} from 'react';
import Head from './Head';
import SearchContext from './contexts/SearchContext';
import SearchResultList from './SearchResultList';
import SearchBar from './SearchBar';


const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    return (
        <>
            <SearchContext.Provider
                value={{
                    searchQuery,
                    setSearchQuery,
                    searchResults,
                    setSearchResults,
                }}
            >
                <SearchBar />
                <SearchResultList />
            </SearchContext.Provider>
        </>
    )
}
export default App;
