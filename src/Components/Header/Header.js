import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
    <div className='header'>
        <div className='header-icon'>
            <FontAwesomeIcon icon={faDumbbell} />
        </div>
        <div className='site-title'>
            <h1>Fitness Club</h1>
        </div>
    </div>
    );
};

export default Header;