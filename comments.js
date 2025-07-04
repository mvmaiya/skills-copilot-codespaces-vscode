// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to the Comments API!',
        endpoints: {
            'GET /comments': 'Get all comments',
            'POST /comments': 'Create a new comment',
            'GET /comments/:id': 'Get a specific comment',
            'DELETE /comments/:id': 'Delete a comment'
        }
    });
});

// Route to get all comments
app.get('/comments', (req, res) => {
    const comments = [
        { id: 1, author: 'John', text: 'Great post!', timestamp: new Date() },
        { id: 2, author: 'Jane', text: 'Thanks for sharing!', timestamp: new Date() },
        { id: 3, author: 'Bob', text: 'Very helpful content.', timestamp: new Date() }
    ];
    res.json(comments);
});

// Route to create a new comment
app.post('/comments', (req, res) => {
    const { author, text } = req.body;
    const newComment = {
        id: Date.now(),
        author: author,
        text: text,
        timestamp: new Date()
    };
    res.status(201).json(newComment);
});

// Route to get a specific comment by ID
app.get('/comments/:id', (req, res) => {
    const commentId = parseInt(req.params.id);
    const comment = { id: commentId, author: 'Sample User', text: 'Sample comment', timestamp: new Date() };
    res.json(comment);
});

// Route to delete a comment
app.delete('/comments/:id', (req, res) => {
    const commentId = parseInt(req.params.id);
    res.json({ message: `Comment ${commentId} deleted successfully` });
});

// Start the server
app.listen(port, () => {
    console.log(`Comments server running at http://localhost:${port}`);
    console.log(`Visit http://localhost:${port}/comments to see all comments`);
});

