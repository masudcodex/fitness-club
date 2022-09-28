import React from 'react';
import Activities from '../Activities/Activities';
import Dashboard from '../Dashboard/Dashboard';
import './User.css';

const User = () => {
    return (
        <div className='user'>
            <Activities></Activities>
            <Dashboard></Dashboard>
        </div>
    );
};

export default User;