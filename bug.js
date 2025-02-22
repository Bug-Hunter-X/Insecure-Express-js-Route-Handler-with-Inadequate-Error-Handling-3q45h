const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Improper error handling: Sends raw error details to the client
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
});