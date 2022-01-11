const dbserver = require('../dao/dbserver')
module.exports = function(app){
    app.get('/getEvent',(req,res)=>{
        dbserver.getEvent(req,res)
    })
    app.post('/addEvent',(req,res)=>{
        console.log('aaa');
        dbserver.addEvent(req.body,res)
    })
    
}