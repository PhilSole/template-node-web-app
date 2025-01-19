const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static files from 'dist' after build
app.use(express.static(path.join(__dirname, '../dist')));

// Parse JSON bodies (for form submissions, etc.)
app.use(express.json());

// Example endpoint for user registration
app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    // TODO: handle validation, hashing password, storing to DB, etc.
    res.json({ success: true, message: 'User registered' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
