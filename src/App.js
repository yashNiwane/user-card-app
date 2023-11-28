// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
      setClicked(true);
    }
  };

  return (
    <div className="app">
      <nav>
        <h1>Let's Grow More</h1>
        <button onClick={fetchUsers}>Get Users</button>
      </nav>
      {clicked && (
        <div>
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <UserList users={users} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
