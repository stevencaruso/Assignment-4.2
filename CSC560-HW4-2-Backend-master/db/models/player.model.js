  
const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    numOfOuts: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    numOfWalks: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    numOfHomeRuns: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    numOfStrikes: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    avgBatSpeed: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    }
})

const Player = mongoose.model('Player', PlayerSchema);

module.exports = { Player }