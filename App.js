import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch data from the server
        axios.get('http://localhost:5000/courses')
            .then(response => setCourses(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="App">
        <h1>My Courses</h1>
            <table>
                <thead>
            <tr>
            
              <th>Course Name</th>
              <th>Start Date</th>
              <th>Lessons Completed</th>
              <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index}>
                        <td><img 
          src={course.image} 
          alt={course.name} 
          style={{ width: '40px', height: '40px', marginBottom: '8px' }} 
        /><br />{course.name}<br />{course.lessons}</td>
                            <td>{course.startDate}</td>
                            <td>{course.completed}/{course.lessons} ({Math.round((course.completed / course.lessons) * 100)}%)</td>
                            <td>{course.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
