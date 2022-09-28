import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import image from '../../Images/user.png';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="user-profile">
                <img src={image} alt="" />
                <div className='username'>
                    <h4>Abdullah Al Masud</h4>
                    <div className="location">
                        <FontAwesomeIcon className='icon' icon={faLocationDot} />
                        <p>Chattogram, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className="user-details">
                <div className="physical-info">
                    <div className="weight">
                        <span className='physical-info-bold'>80</span>kg <br /> Weight
                    </div>
                    <div className="height">
                        <span className='physical-info-bold'>5.7</span> <br /> Height
                    </div>
                    <div className="age">
                        <span className='physical-info-bold'>25</span>yrs <br /> Age
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;