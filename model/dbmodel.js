const mongoose = require('mongoose')
const db = require('../config/db')
const Schema = mongoose.Schema
const eventSchema = new Schema({
    location:String,
    startTime: String,
    endTime:String,
    picList:Array
})
// const courseSchema = new Schema({

// })
exports.Event=db.model('Event',eventSchema)