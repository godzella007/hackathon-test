// server.test.js

const request = require('supertest');
const app = require('./server');

describe('Server Tests', () => {
  it('should respond with status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
  });
});
