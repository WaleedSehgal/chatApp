var request = require("request");

var base_url = "http://localhost:3000/messages"

describe('get messages', ()=>{
    it('should return 200 ok', (done) => {
        request.get(base_url, (err, res)=>{
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('should return, a list that is not empty', (done) => {
        request.get(base_url, (err, res)=>{
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})

describe('get messages from user', ()=>{
    it('should return 200 ok', (done) => {
        request.get(base_url+'/tim', (err, res)=>{
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('name should be Tim', (done) => {
        request.get(base_url+'/tim', (err, res)=>{
            expect(JSON.parse(res.body)[0].name).toEqual('tim')
            done()
        })
    })
})