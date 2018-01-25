const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const http = require('http')
const assert = chai.assert;
chai.use(chaiHttp);

const app =require('../app');
const request = chai.request(app);

describe('GET users', function () {

    it('responds to /', (done) => {
        request(app)
        .get('/users')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('json');
            res.body.length.should.be.eql(2);
      })
    });
});