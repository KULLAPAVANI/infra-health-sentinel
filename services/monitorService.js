// Core Monitoring Engine Logic
const checkServiceHealth = async (targetUrl) => {
  const startTime = Date.now();
  try {
    const response = await fetch(targetUrl);
    const responseTime = Date.now() - startTime;

    return {
      url: targetUrl,
      status: response.ok ? 'UP' : 'DOWN',
      statusCode: response.status,
      responseTime: `${responseTime}ms`,
      checkedAt: new Date().toISOString()
    };
  } catch (error) {
    const responseTime = Date.now() - startTime;
    return {
      url: targetUrl,
      status: 'DOWN',
      statusCode: 500,
      responseTime: `${responseTime}ms`,
      error: error.message,
      checkedAt: new Date().toISOString()
    };
  }
};

module.exports = { checkServiceHealth };