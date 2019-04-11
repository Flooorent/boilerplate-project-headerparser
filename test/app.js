const chai = require('chai')
const chaiHttp = require('chai-http')
const httpStatus = require('http-status')

const app = require('../app')

chai.use(chaiHttp).should()

describe('app', function() {
    describe('/api/whoami', function() {
        it("should send back the IP address, preferred languages, and device's system infos", function(done) {
            chai.request(app)
                .get('/api/whoami')
                .end(function(err, res) {
                    res.status.should.equal(httpStatus.OK)
                    res.should.be.json
                    res.body.should.have.property('ipaddress')
                    res.body.should.have.property('language')
                    res.body.should.have.property('software')
                    done()
                })
        })
    })
})