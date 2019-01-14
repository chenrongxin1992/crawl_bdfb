/**
 *  @Author:    chenrongxin
 *  @Create Date:   2017-12-03
 *  @Description: 民事案例
 */
var mongoose = require('./db'),
    Schema = mongoose.Schema,
    moment = require('moment')

var msalSchema = new Schema({//民事案例
    bdfb_title : {type:String},//案件名称
    bdfb_alink : {type:String},//案件链接
    insert_ime : {type : String, default : moment().format('YYYY-MM-DD HH:mm:ss') },     //插入时间
    insert_timeStamp : {type : String,default:moment().format('X')}
})

module.exports = mongoose.model('msal',msalSchema);