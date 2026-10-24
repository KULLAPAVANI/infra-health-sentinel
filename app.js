const express = require('express');
const app = express();

app.use(express.json());

// Basic Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Infra Health Sentinel API is running successfully'
  });
});

module.exports = app;