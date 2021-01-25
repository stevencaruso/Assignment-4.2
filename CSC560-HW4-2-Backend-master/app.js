const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');

const { Player } = require('./db/models/player.model');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

app.get('/players', (req,res) => {
    Player.find({}).then((players) => {
        res.send(players);
    })
})

app.get('/players/:id', (req,res) => {
    Player.findOne({
        _id: req.params.id
    }).then((player) => {
        res.send(player);
    })
})

app.post('/players', (req,res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let numOfOuts = req.body.numOfOuts;
    let numOfWalks = req.body.numOfWalks;
    let numOfHomeRuns = req.body.numOfHomeRuns;
    let numOfStrikes = req.body.numOfStrikes;
    let avgBatSpeed = req.body.avgBatSpeed;

    let newPlayer = new Player({
        firstName,
        lastName,
        numOfOuts,
        numOfWalks,
        numOfHomeRuns,
        numOfStrikes,
        avgBatSpeed
    })

    newPlayer.save().then((playerDoc) => {
        res.send(playerDoc);
    })
})

app.patch('/players/:id', (req,res) => {
    Player.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.send({message: "Updated successfully!",});
    })
})

app.delete('/players/:id', (req,res) => {
    Player.findOneAndRemove({
        _id: req.params.id
    }).then((removedPlayerDoc) => {
        res.send(removedPlayerDoc);
    })
})

app.listen(3000, () => {
    console.log( "server is listening on port 3000")
})