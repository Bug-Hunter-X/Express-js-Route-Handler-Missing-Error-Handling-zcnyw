const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate user ID (add more robust validation as needed)
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Failed to retrieve user');
    } else if (!user) {
      return res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});