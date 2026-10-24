const request = require('supertest');
const app = require('./app');

describe('GET /api/health', () => {
  it('should return 200 OK and UP status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('UP');
  });
});