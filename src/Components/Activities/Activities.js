import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Blog from '../Blog/Blog';
import './Activities.css';

const Activities = () => {
    const [activities, setactivities] = useState([]);
    let [time, setTime] = useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setactivities(data))
    },[])
    const addToList = (selectedActivity) => {
       time = time + selectedActivity.time;
       setTime(time);
    }
    return (
        <div className='activities'>
            <div>
                <Header></Header>
                <div className='activity-container'>
                    {
                    activities.map(activity=> 
                    <Activity
                        key={activity.id}
                        activity={activity}
                        addToList ={addToList}
                        time = {time}>
                    </Activity>)
                    }
                </div>
                
            </div>
            <div className="dashboard">
                <Dashboard time={time}></Dashboard>
            </div>
            <div className='blog'>
               <Blog></Blog> 
            </div>
        </div>
    );
};

export default Activities;