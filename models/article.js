const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    house :{
        type: Number
    },
    transport: {
        type: Number
    },
    healthcare: {
        type: Number
    },
    child: {
        type: Number
    },
    studies: {
        type: Number
    },
    extras: {
        type: Number
    },
    total:{
        type: Number
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    slug:{
        type: String,
        require: true,
        unique: true
    }
})

articleSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict: true})
    }
    next()
})

module.exports = mongoose.model('Article', articleSchema)