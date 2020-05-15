let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

chai.should();
chai.use(chaiHttp);

describe('Test API', () => {
  describe('GET', () => {
    it("It should GET all", (done) => {
      chai.request(server)
        .get("/")
        .end((err, response) => {
          response.should.have.status(200);
        done();
        });
    });    
  });
});
