const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Mock course data
const courses = [
    { image: "/download.png",name: "Basic Algorithm", lessons: 25, startDate: "27 Jan, 2023", completed: 10, duration: "14h 38m 56s" },
    { image: "/download.png",name: "Web Development", lessons: 45, startDate: "23 Feb, 2023", completed: 40, duration: "36h 30m 00s" },
    { image: "/download.png",name: "Basic Data Science", lessons: 37, startDate: "14 Jan, 2023", completed: 9, duration: "37h 00m 00s" },
    { image: "/download.png",name: "UI/UX Design", lessons: 32, startDate: "19 Feb, 2023", completed: 26, duration: "16h 40m 50s" },
    { image: "/download.png",name: "Project Management", lessons: 19, startDate: "27 Jan, 2023", completed: 14, duration: "13h 20m 00s" }
];

// Endpoint to get courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
