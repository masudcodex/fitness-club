import React from 'react';
import './Activity.css'

const Activity = ({addToList, activity}) => {
    const {title, image, time, age, description} = activity;
    return (
        <div className='activity'>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p><span className='black'><b>Age Limit:</b></span> {age}</p>
            <p><span className='black'><b>Time required:</b></span> {time}</p>
            <button onClick={()=>addToList(activity)}>Add to list</button>
        </div>
    );
};

export default Activity;