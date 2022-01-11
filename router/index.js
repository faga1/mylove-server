const dbserver = require('../dao/dbserver')
const {getSts} = require('../dao/sts')
module.exports = function(app){
    app.get('/test',(req,res)=>{
        dbserver.getEvent(req,res)
    })
    app.post('/addEvent',(req,res)=>{
        dbserver.addEvent(req.body,res)
    })
    
}