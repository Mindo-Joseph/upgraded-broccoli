import { createContext } from "react";

const SearchContext = createContext({
    searchQuery: "",
    setSearchQuery: () => { },
    searchResults: [],
    setSearchResults: () => { },
});

export default SearchContext;
