import React, {useState} from 'react';
import Head from './Head';
import SearchContext from './contexts/SearchContext';
import SearchResultList from './SearchResultList';
import SearchBar from './SearchBar';
import SideNav from "./SideNav/SideNav";


const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="flex flex-col">
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

            <SideNav />
        </div>
    )
}
export default App;
