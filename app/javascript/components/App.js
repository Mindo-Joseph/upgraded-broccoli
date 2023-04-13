// app/javascript/components/App.js
import React, {useState} from 'react';
import SearchContext from './contexts/SearchContext';
import SearchResultList from './SearchResultList';
import SearchBar from './SearchBar';
import SideNav from './SideNav/SideNav.js';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="flex">
            <SideNav/>
            <SearchContext.Provider value={
                {searchQuery, setSearchQuery, searchResults, setSearchResults}
            }>
                <div className="flex-1 flex flex-col">
                    <SearchBar/>
                    <SearchResultList/>
                </div>
            </SearchContext.Provider>
        </div>
    );
};

export default App;
