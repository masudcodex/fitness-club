import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = () => {
    const [activities, setactivities] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setactivities(data))
    },[])
    return (
        <div className='activities'>
            {
                activities.map(activity=> 
                <Activity
                    key={activity.id}
                    activity={activity}>
                </Activity>)
            }
        </div>
    );
};

export default Activities;