/*
Author: Avinash Reddy
Edited:Yuxuan He
Date: 07/05/2018
*/

// Schema that create and store the answers from respodents.
var mongoose = require("mongoose")

var respondentsSchema = mongoose.Schema({
    survey:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey'
    },
    createdAt: {type: Date, default: Date.now},
    exceptTime:{
        type:String
    },
    totalAnswerTime:{
        type:String
    },
    answers:[{
        qid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
         },
        types:{
            type:Number,
            default:1
        },
        content: {
            type: String
        },
        responseTime:{
            type:String
        }
    }]
    
})


module.exports = mongoose.model("Answer", respondentsSchema)