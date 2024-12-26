const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user ID
  db.getUser(userId, (err, user) => {
    if (err) {
      // No error handling here, will crash if DB fails
      res.status(500).send('Internal server error');
    } else {
      res.json(user);
    }
  });
});