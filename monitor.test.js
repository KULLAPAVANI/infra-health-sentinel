const request = require('supertest');
const app = require('./app');

describe('POST /api/monitor/check', () => {
  it('should return 400 if url is missing', async () => {
    const res = await request(app).post('/api/monitor/check').send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toBeDefined();
  });

  it('should successfully check a valid public URL', async () => {
    // Testing against a public stable endpoint like google.com or our own health endpoint
    const res = await request(app)
      .post('/api/monitor/check')
      .send({ url: 'https://www.google.com' });
      
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('UP');
    expect(res.body.responseTime).toBeDefined();
  });
});