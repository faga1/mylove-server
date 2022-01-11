const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mylove')
const db = mongoose.connection
db.on('error',console.error.bind(console,'数据库连接失败'))
db.once('open',function(){
    console.log('数据库连接成功');
})
module.exports = db