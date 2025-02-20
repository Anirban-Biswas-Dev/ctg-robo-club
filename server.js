const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hi, Welcome to Chittagong College Robotics Club');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
