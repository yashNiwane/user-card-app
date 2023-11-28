// src/components/UserCard.js
import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => (
  <div className="user-card">
    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    <h2>{`${user.first_name} ${user.last_name}`}</h2>
    <p>{user.email}</p>
  </div>
);

export default UserCard;
