const dbmodel = require('../model/dbmodel')
const {Event} = dbmodel
exports.getEvent = async function(req,res){
    const result = await Event.find()
    res.send(result)
}
exports.addEvent = (body,res)=>{
    Event.create(body,function(err,result){
        if(err){
            res.send({code:50000})
        }else{
            res.send({
                code:20000,
                data:result
            })
        }
    })
}
