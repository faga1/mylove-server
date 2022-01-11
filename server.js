const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const port=3344
app.get('/',(req,res)=>{
    res.send('hello')
})
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
require('./router')(app)
app.use((req,res,next)=>{
    let err=new Error('not found')
    err.status=404
    next(err)
})
app.use((err,req,res,next)=>{
    res.status(err.status||500)
    res.send(err.message)
})

app.listen(port)