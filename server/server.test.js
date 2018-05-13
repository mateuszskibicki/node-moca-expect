const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Express', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toMatchObject({
            error: 'Page not found.'
          });
        })
        .end(done);
    })
  });

  describe('GET /users', () => {
    it('should return users', (done) => {
      request(app)
        .get('/users')
        .expect(202)
        .expect((res) => {
          //console.log(res.body)
          expect(res.body).toContainEqual({
            name: 'Mateusz',
            age: 23
          });
        })
        .end(done);
    });
  })
})