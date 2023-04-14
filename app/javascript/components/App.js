// app/javascript/components/App.js
import React, {useEffect, useState} from 'react';
import SearchContext from './contexts/SearchContext';
import SearchResultList from './SearchResultList';
import SearchBar from './SearchBar';
import SideNav from './SideNav/SideNav.js';
import TutorDashboard from './TutorDashboard.js';
import LearnerDashboard from './LearnerDashboard.js';
import {getCurrentUser} from '../api/userApi.js';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const mockCurrentUser = {
        id: 4,
        email: 'learner1@example.com',
        first_name: 'Learner1',
        last_name: 'Name',
        admin: false,
        created_at: '2023-04-11T11:22:28.497Z',
        updated_at: '2023-04-11T11:22:28.497Z',
        role: 'tutor',
        tutor_id: 3

    }
    // const mockCurrentUser
    const [currentUser, setCurrentUser] = useState(mockCurrentUser);

    // useEffect(() => {
    //     const fetchCurrentUser = async () => {
    //         const response = await getCurrentUser();
    //         setCurrentUser(response);
    //     }
    //     fetchCurrentUser();
    // }, [])

    if (currentUser === null) {
        return <div> Loading ...</div>
    }

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
        <main>
            <div className="app"> {
                currentUser.role === 'tutor' ? <TutorDashboard/>: <LearnerDashboard/>
            } </div>


        </main>
    </div>);
};

export default App;
