import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <div className='blog-single'>
                <h3>How does React work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='blog-single'>
                <h3>What are the differences between props and state?</h3>
                <p><b>Difference between props and state:</b></p>
                <div className='flex-item'>
                    <div>
                        <b>Props</b>
                        <p>The Data is passed from one component to another.</p>
                        <p>It is Immutable (cannot be modified).</p>
                        <p>Props can be used with state and functional components.</p>
                        <p>Props are read-only.</p>
                    </div>
                    <div>
                        <b>State</b>
                        <p>The Data is passed within the component only.</p>
                        <p>It is Mutable ( can be modified).</p>
                        <p>State can be used only with the state components/class component (Before 16.0).</p>
                        <p>State is both read and write.</p>
                    </div>
                </div>
            </div>
            <div className='blog-single'>
                <h3>What are the uses of useEffect?</h3>
                <p>useEffect is one of the most popular Hooks because it allows you to perform side effects in function components. <br />
                The useEffect Hook lets you run additional code after React has already updated the DOM. <br />
                The useEffect Hook takes two arguments: <br />
                The first argument is a callback function that by default runs after every render. <br /> The second argument is an optional Dependency array that tells the Hook to only callback if there is a change in a target state. The Hook compares the previous and current state value of each dependency. <br />
                If the two values don’t match, the Hook uses the first argument callback. <br />
                Dependency arrays override the default callback behavior and ensure the Hook ignores everything else in the component scope. <br />
                Some common use cases of useEffect are: <br />
                <ol>
                    <li>Add an event listener for a button</li>
                    <li>Data fetching from API when component mounts</li>
                    <li>Perform an action when state or props change </li>
                    <li>Clean up event listeners when the component unmounts </li>
                    <li>In each case above, useEffect is used in place of a lifecycle method. </li>
                </ol>
                
                
                
                
                
                </p>
            </div>
        </div>
    );
};

export default Blog;