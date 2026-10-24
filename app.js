const express = require('express');
const { checkServiceHealth } = require('./services/monitorService');
const app = express();

app.use(express.json());

// Basic Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Infra Health Sentinel API is running successfully'
  });
});

// Core Monitoring Engine Endpoint
app.post('/api/monitor/check', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'Target URL is required for monitoring' });
  }

  const result = await checkServiceHealth(url);
  res.status(200).json(result);
});

module.exports = app;