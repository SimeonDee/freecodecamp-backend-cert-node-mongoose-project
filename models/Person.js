const mongoose = require('mongoose')
const { Schema } = mongoose

const personSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
    favoriteFoods: [String],
}, {timestamps: true})

module.exports = mongoose.model('Person', personSchema)