import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import image from '../../Images/user.png';

const Dashboard = (props) => {
    const {time} = props
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
            <div className="user-activities">
                <h4>Add a break</h4>
                <div className="break-time">
                    <p value="10">10s</p>
                    <p value="20">20s</p>
                    <p value="30">30s</p>
                    <p value="40">40s</p>
                    <p value="50">50s</p>
                </div>
            </div>
            <div>
                <h4>Exercise Details</h4>
                <div className='exercise-time-count'>
                    <h4>Exercise Time</h4>
                    <p>{time} Seconds</p>
                </div>
                <div className='break-time-count'>
                    <h4>Break Time</h4>
                    <p>15 Seconds</p>
                </div>
            </div>
            <button>Activity Completed</button>

        </div>
    );
};

export default Dashboard;